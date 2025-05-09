
import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [adminEmail, setAdminEmail] = React.useState("");
  const [adminPassword, setAdminPassword] = React.useState("");
  const { toast } = useToast();

  // Esta es una verificación administrativa simple y básica
  const handleAdminLogin = () => {
    if (adminEmail === "hola@ipff.es" && adminPassword) {
      onLogin();
      toast({
        title: "Acceso concedido",
        description: "Bienvenido al panel de administración",
      });
    } else {
      toast({
        title: "Acceso denegado",
        description: "Credenciales no válidas",
        variant: "destructive",
      });
    }
  };

  return (
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
  );
};

export default AdminLogin;
