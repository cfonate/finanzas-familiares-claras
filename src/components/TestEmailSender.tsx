
import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const TestEmailSender: React.FC = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    setLoading(true);
    toast({ title: "Enviando...", description: "Enviando correo de prueba..." });
    try {
      const response = await fetch(
        "https://zjrwvcdjbypdxldtcaws.functions.supabase.co/send-test-email",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ to: email }),
        }
      );
      const result = await response.json();
      if (!response.ok || result.error) {
        throw new Error(result.error || "Error desconocido al enviar.");
      }
      toast({
        title: "¡Correo enviado!",
        description: `Correo de prueba enviado a ${email}`,
      });
    } catch (err: any) {
      toast({
        title: "Error al enviar",
        description: err.message,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="p-6 max-w-md mx-auto mt-12">
      <h2 className="font-bold text-2xl mb-3 text-finance-primary">
        Prueba de envío de email (Resend)
      </h2>
      <Input
        placeholder="Introduce tu email"
        value={email}
        type="email"
        onChange={(e) => setEmail(e.target.value)}
        disabled={loading}
        className="mb-4"
      />
      <Button
        disabled={loading || !email}
        onClick={handleSend}
        className="w-full bg-finance-primary hover:bg-finance-primary/80"
      >
        {loading ? "Enviando..." : "Enviar correo de prueba"}
      </Button>
    </Card>
  );
};

export default TestEmailSender;
