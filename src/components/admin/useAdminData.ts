
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";

export interface Submission {
  id: string;
  created_at: string;
  first_name: string;
  last_name: string;
  email: string;
  results?: {
    percentage?: number;
    category?: string;
  };
}

export interface EmailQueueItem {
  id: string;
  created_at: string;
  recipient_name: string;
  recipient_email: string;
  subject: string;
  content: string;
  status: string;
  type: string;
}

export const useAdminData = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [emailQueue, setEmailQueue] = useState<EmailQueueItem[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

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

      // Obtener la cola de correos electrónicos - using 'any' type to work around the type issue
      const { data: emailData, error: emailError } = await (supabase as any)
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

  // Formatear fecha actual para nombre del archivo
  const getDateForFilename = () => {
    return format(new Date(), 'yyyy-MM-dd_HHmm');
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

  // Función para exportar los correos electrónicos en formato compatible con hosting
  const exportEmailsForHosting = () => {
    if (emailQueue.length === 0) {
      toast({
        title: "Sin datos",
        description: "No hay correos para exportar",
        variant: "destructive",
      });
      return;
    }

    // Filtrar solo los correos pendientes
    const pendingEmails = emailQueue.filter(email => email.status === 'pending');
    
    if (pendingEmails.length === 0) {
      toast({
        title: "Sin correos pendientes",
        description: "Todos los correos ya han sido procesados",
        variant: "destructive",
      });
      return;
    }

    // Crear un objeto JSON con los datos necesarios para el envío
    const emailData = pendingEmails.map(email => ({
      id: email.id,
      to: email.recipient_email,
      name: email.recipient_name,
      subject: email.subject,
      html: email.content,
      type: email.type
    }));

    // Convertir a JSON y descargar
    const blob = new Blob([JSON.stringify(emailData, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('hidden', '');
    a.setAttribute('href', url);
    a.setAttribute('download', `emails_for_hosting_${getDateForFilename()}.json`);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

    toast({
      title: "Exportación completada",
      description: `${pendingEmails.length} correos exportados para su envío`,
    });
  };

  // Marcar correos como enviados
  const markEmailsAsSent = async (ids: string[]) => {
    try {
      const { error } = await supabase
        .from("email_queue")
        .update({ status: "sent" })
        .in("id", ids);

      if (error) throw error;
      
      toast({
        title: "Actualización exitosa",
        description: `${ids.length} correos marcados como enviados`,
      });
      
      fetchData();
    } catch (error) {
      console.error("Error updating email status:", error);
      toast({
        title: "Error",
        description: "No se pudieron actualizar los estados de los correos",
        variant: "destructive",
      });
    }
  };

  // Función para actualizar estados de correos según IDs
  const handleUpdateEmailStatus = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json';
    
    input.onchange = async (e) => {
      const target = e.target as HTMLInputElement;
      if (target.files && target.files.length > 0) {
        const file = target.files[0];
        const reader = new FileReader();
        
        reader.onload = async (event) => {
          try {
            if (event.target && event.target.result) {
              // Convertir el resultado a string antes de parsearlo como JSON
              const content = typeof event.target.result === 'string' 
                ? event.target.result 
                : new TextDecoder().decode(event.target.result as ArrayBuffer);
                
              const idsData = JSON.parse(content);
              if (Array.isArray(idsData) && idsData.length > 0) {
                await markEmailsAsSent(idsData);
              } else {
                toast({
                  title: "Formato incorrecto",
                  description: "El archivo debe contener un array de IDs",
                  variant: "destructive",
                });
              }
            }
          } catch (error) {
            toast({
              title: "Error al procesar el archivo",
              description: "El archivo no tiene un formato JSON válido",
              variant: "destructive",
            });
          }
        };
        
        reader.readAsText(file);
      }
    };
    
    input.click();
  };

  return {
    submissions,
    emailQueue,
    loading,
    fetchData,
    exportToCSV,
    exportEmailsForHosting,
    handleUpdateEmailStatus,
    getDateForFilename
  };
};
