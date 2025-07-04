
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuestionnaire } from "@/context/QuestionnaireContext";
import { saveSubmission, sendEmails } from "@/services/submissionService";

const userInfoSchema = z.object({
  firstName: z.string().min(2, "El nombre debe tener al menos 2 caracteres"),
  lastName: z.string().min(2, "El apellido debe tener al menos 2 caracteres"),
  email: z.string().email("Por favor introduce un email válido"),
});

export type UserInfo = z.infer<typeof userInfoSchema>;

interface UserInfoFormProps {
  onSubmit: (data: UserInfo) => void;
}

const UserInfoForm: React.FC<UserInfoFormProps> = ({ onSubmit }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { answers, results } = useQuestionnaire();
  
  const form = useForm<UserInfo>({
    resolver: zodResolver(userInfoSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  });

  const handleSubmit = async (data: UserInfo) => {
    setIsSubmitting(true);
    console.log("Enviando datos del formulario:", data);
    console.log("Respuestas:", answers);
    console.log("Resultados:", results);
    
    try {
      if (!answers || answers.length === 0) {
        throw new Error("No hay respuestas disponibles");
      }
      
      if (!results) {
        throw new Error("No hay resultados disponibles");
      }

      const submission = {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        answers,
        results
      };

      console.log("Guardando envío en base de datos...");
      const saveResult = await saveSubmission(submission);
      
      if (!saveResult.success) {
        throw new Error("Error al guardar los datos");
      }
      
      console.log("Datos guardados exitosamente, enviando emails...");
      const emailResult = await sendEmails(submission);
      
      if (!emailResult.success) {
        console.error("Error al enviar emails:", emailResult.error);
        throw new Error("Error al enviar los emails");
      }
      
      console.log("Emails enviados exitosamente");
      toast({
        title: "Éxito",
        description: "Los datos se han guardado y los emails se han enviado correctamente",
      });
      
      onSubmit(data);
    } catch (error) {
      console.error("Error en el envío:", error);
      toast({
        title: "Error",
        description: error instanceof Error ? error.message : "Hubo un problema al enviar el formulario",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="p-6">
      <h2 className="text-2xl font-bold text-finance-primary mb-4">
        Información Personal
      </h2>
      <p className="text-muted-foreground mb-6">
        Por favor, introduzca sus datos para recibir los resultados por email.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Nombre</FormLabel>
                <FormControl>
                  <Input placeholder="Introduzca su nombre" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Apellidos</FormLabel>
                <FormControl>
                  <Input placeholder="Introduzca sus apellidos" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="usuario@ejemplo.com" type="email" {...field} disabled={isSubmitting} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button
            type="submit"
            className="w-full mt-4 bg-finance-primary hover:bg-finance-primary/80"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..." : "Continuar"}
          </Button>
        </form>
      </Form>
    </Card>
  );
};

export default UserInfoForm;
