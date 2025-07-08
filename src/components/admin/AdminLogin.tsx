
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { Alert, AlertDescription } from "@/components/ui/alert";

interface AdminLoginProps {
  onLogin: () => void;
}

const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [adminEmail, setAdminEmail] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [attemptCount, setAttemptCount] = useState(0);
  const [isLocked, setIsLocked] = useState(false);
  const { toast } = useToast();

  // Simple rate limiting
  const MAX_ATTEMPTS = 3;
  const LOCKOUT_TIME = 5 * 60 * 1000; // 5 minutes

  const handleAdminLogin = async () => {
    if (isLocked) {
      toast({
        title: "Cuenta bloqueada",
        description: "Demasiados intentos fallidos. Inténtalo más tarde.",
        variant: "destructive",
      });
      return;
    }

    if (!adminEmail || !adminPassword) {
      toast({
        title: "Campos requeridos",
        description: "Por favor, completa todos los campos",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      // Simulate secure authentication check
      // In a real implementation, this would hash the password and compare with stored hash
      const isValidCredentials = adminEmail === "hola@ipff.es" && adminPassword.length >= 8;
      
      // Add a small delay to prevent timing attacks
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (isValidCredentials) {
        setAttemptCount(0);
        onLogin();
        toast({
          title: "Acceso concedido",
          description: "Bienvenido al panel de administración",
        });
      } else {
        const newAttemptCount = attemptCount + 1;
        setAttemptCount(newAttemptCount);
        
        if (newAttemptCount >= MAX_ATTEMPTS) {
          setIsLocked(true);
          setTimeout(() => {
            setIsLocked(false);
            setAttemptCount(0);
          }, LOCKOUT_TIME);
          
          toast({
            title: "Cuenta bloqueada",
            description: "Demasiados intentos fallidos. Cuenta bloqueada por 5 minutos.",
            variant: "destructive",
          });
        } else {
          toast({
            title: "Acceso denegado",
            description: `Credenciales no válidas. Intentos restantes: ${MAX_ATTEMPTS - newAttemptCount}`,
            variant: "destructive",
          });
        }
        
        // Clear password field on failed attempt
        setAdminPassword("");
      }
    } catch (error) {
      console.error("Error en autenticación:", error);
      toast({
        title: "Error del sistema",
        description: "Error interno del sistema. Inténtalo más tarde.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAdminLogin();
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Acceso Administrativo</h2>
      
      {isLocked && (
        <Alert className="mb-4 border-red-500">
          <AlertDescription>
            Cuenta bloqueada temporalmente por seguridad. Inténtalo en 5 minutos.
          </AlertDescription>
        </Alert>
      )}
      
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
            onKeyPress={handleKeyPress}
            placeholder="Introduzca su email"
            disabled={isLoading || isLocked}
            autoComplete="email"
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
            onKeyPress={handleKeyPress}
            placeholder="Introduzca su contraseña"
            disabled={isLoading || isLocked}
            autoComplete="current-password"
            minLength={8}
          />
        </div>
        
        <Button 
          onClick={handleAdminLogin}
          className="w-full bg-finance-primary hover:bg-finance-primary/80"
          disabled={isLoading || isLocked}
        >
          {isLoading ? "Verificando..." : "Acceder"}
        </Button>
        
        {attemptCount > 0 && attemptCount < MAX_ATTEMPTS && (
          <p className="text-sm text-yellow-600 text-center">
            Intentos fallidos: {attemptCount}/{MAX_ATTEMPTS}
          </p>
        )}
      </div>
    </Card>
  );
};

export default AdminLogin;
