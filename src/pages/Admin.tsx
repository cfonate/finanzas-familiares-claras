
import React, { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { 
  Table, 
  TableBody, 
  TableCaption, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { format } from "date-fns";
import { Download, RefreshCcw } from "lucide-react";

const Admin = () => {
  const [submissions, setSubmissions] = useState<any[]>([]);
  const [emailQueue, setEmailQueue] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const { toast } = useToast();

  // Esta es una verificación administrativa simple y básica
  const handleAdminLogin = () => {
    if (adminEmail === "hola@ipff.es" && adminPassword) {
      setIsAdmin(true);
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel de administración",
      });
      fetchData();
    } else {
      toast({
        title: "Acceso denegado",
        description: "Credenciales no válidas",
        variant: "destructive",
      });
    }
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      // Obtener los envíos del formulario
      const { data: formData, error: formError } = await supabase
        .from("form_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (formError) throw formError;
      setSubmissions(formData || []);

      // Obtener la cola de correos electrónicos
      const { data: emailData, error: emailError } = await supabase
        .from("email_queue")
        .select("*")
        .order("created_at", { ascending: false });

      if (emailError) throw emailError;
      setEmailQueue(emailData || []);

    } catch (error) {
      console.error("Error fetching data:", error);
      toast({
        title: "Error",
        description: "No se pudieron cargar los datos",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  // Exportar datos a CSV
  const exportToCSV = (data: any[], filename: string) => {
    if (data.length === 0) {
      toast({
        title: "Sin datos",
        description: "No hay datos para exportar",
        variant: "destructive",
      });
      return;
    }

    // Convertir datos a CSV
    const header = Object.keys(data[0]).join(',');
    const csv = [
      header,
      ...data.map(row => Object.values(row).map(value => {
        // Manejar objetos anidados
        if (typeof value === 'object' && value !== null) {
          return `"${JSON.stringify(value).replace(/"/g, '""')}"`;
        }
        // Escapar comillas
        if (typeof value === 'string') {
          return `"${value.replace(/"/g, '""')}"`;
        }
        return `"${value}"`;
      }).join(','))
    ].join('\n');

    // Crear y descargar archivo CSV
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', filename);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const formatDate = (dateString: string) => {
    try {
      return format(new Date(dateString), 'dd/MM/yyyy HH:mm:ss');
    } catch (e) {
      return dateString;
    }
  };

  // Formatear fecha actual para nombre del archivo
  const getDateForFilename = () => {
    return format(new Date(), 'yyyy-MM-dd_HHmm');
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <Card className="p-6 mb-8">
        <div className="flex justify-center mb-6">
          <img 
            src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" 
            alt="IPFF Logo" 
            className="h-16" 
          />
        </div>
        <h1 className="text-3xl font-bold text-center mb-4 text-finance-primary">
          Panel de Administración
        </h1>
      </Card>

      {!isAdmin ? (
        <Card className="p-6">
          <h2 className="text-xl font-semibold mb-4">Acceso Administrativo</h2>
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium">
                Correo Electrónico
              </label>
              <Input 
                id="email" 
                type="email" 
                value={adminEmail} 
                onChange={(e) => setAdminEmail(e.target.value)}
                placeholder="Introduzca su email"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-medium">
                Contraseña
              </label>
              <Input 
                id="password" 
                type="password" 
                value={adminPassword} 
                onChange={(e) => setAdminPassword(e.target.value)}
                placeholder="Introduzca su contraseña"
              />
            </div>
            
            <Button 
              onClick={handleAdminLogin}
              className="w-full bg-finance-primary hover:bg-finance-primary/80"
            >
              Acceder
            </Button>
          </div>
        </Card>
      ) : (
        <>
          <div className="flex justify-end mb-4 gap-2">
            <Button 
              variant="outline" 
              onClick={fetchData} 
              disabled={loading}
              className="flex items-center gap-2"
            >
              <RefreshCcw size={18} />
              Actualizar datos
            </Button>
            <Button 
              onClick={() => exportToCSV(submissions, `submissions_${getDateForFilename()}.csv`)}
              className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
            >
              <Download size={18} />
              Exportar envíos
            </Button>
            <Button 
              onClick={() => exportToCSV(emailQueue, `email_queue_${getDateForFilename()}.csv`)}
              className="flex items-center gap-2 bg-finance-primary hover:bg-finance-primary/80"
            >
              <Download size={18} />
              Exportar cola de emails
            </Button>
          </div>

          <Card className="p-6 mb-8">
            <h2 className="text-xl font-semibold mb-4">Envíos de Formularios</h2>
            {loading ? (
              <p className="text-center py-4">Cargando...</p>
            ) : submissions.length === 0 ? (
              <p className="text-center py-4">No hay envíos de formularios</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Lista de envíos de formularios</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Nombre</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Puntuación</TableHead>
                      <TableHead>Categoría</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((submission) => (
                      <TableRow key={submission.id}>
                        <TableCell>{formatDate(submission.created_at)}</TableCell>
                        <TableCell>{`${submission.first_name} ${submission.last_name}`}</TableCell>
                        <TableCell>{submission.email}</TableCell>
                        <TableCell>{submission.results?.percentage || '—'}%</TableCell>
                        <TableCell>{submission.results?.category || '—'}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </Card>

          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Cola de Correos Electrónicos</h2>
            {loading ? (
              <p className="text-center py-4">Cargando...</p>
            ) : emailQueue.length === 0 ? (
              <p className="text-center py-4">No hay correos en cola</p>
            ) : (
              <div className="overflow-x-auto">
                <Table>
                  <TableCaption>Lista de correos en cola</TableCaption>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Fecha</TableHead>
                      <TableHead>Destinatario</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Asunto</TableHead>
                      <TableHead>Estado</TableHead>
                      <TableHead>Tipo</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {emailQueue.map((email) => (
                      <TableRow key={email.id}>
                        <TableCell>{formatDate(email.created_at)}</TableCell>
                        <TableCell>{email.recipient_name}</TableCell>
                        <TableCell>{email.recipient_email}</TableCell>
                        <TableCell>{email.subject}</TableCell>
                        <TableCell>
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            email.status === 'sent' 
                              ? 'bg-green-100 text-green-800' 
                              : email.status === 'error'
                              ? 'bg-red-100 text-red-800'
                              : 'bg-yellow-100 text-yellow-800'
                          }`}>
                            {email.status}
                          </span>
                        </TableCell>
                        <TableCell>{email.type}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            )}
          </Card>
        </>
      )}
    </div>
  );
};

export default Admin;
