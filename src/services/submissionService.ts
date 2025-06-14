
import { supabase } from "@/integrations/supabase/client";
import { Answer, QuestionnaireResult } from "../types/questionTypes";
import { Database } from "@/integrations/supabase/types";

export interface UserSubmission {
  firstName: string;
  lastName: string;
  email: string;
  answers: Answer[];
  results: QuestionnaireResult;
}

type FormSubmissionInsert = Database['public']['Tables']['form_submissions']['Insert'];

// Supabase configuration constants
const SUPABASE_URL = "https://zjrwvcdjbypdxldtcaws.supabase.co";
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqcnd2Y2RqYnlwZHhsZHRjYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzI0MjksImV4cCI6MjA2MTc0ODQyOX0.5vNVgdgcep_0v_B8aLeyAKZwioKLENBO895_V4QZVk8";

export const saveSubmission = async (submission: UserSubmission) => {
  console.log("=== INICIANDO GUARDADO DE ENVÍO ===");
  console.log("Datos del envío:", {
    firstName: submission.firstName,
    lastName: submission.lastName,
    email: submission.email,
    answersCount: submission.answers?.length || 0,
    hasResults: !!submission.results
  });
  
  // Verificar configuración de Supabase
  console.log("Configuración Supabase:", {
    url: SUPABASE_URL,
    hasKey: !!SUPABASE_ANON_KEY,
    currentDomain: window.location.origin
  });

  try {
    const submissionData: FormSubmissionInsert = {
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      answers: submission.answers,
      results: submission.results
    };

    console.log("Datos para insertar en BD:", submissionData);

    const { data, error } = await supabase
      .from("form_submissions")
      .insert(submissionData)
      .select();
      
    if (error) {
      console.error("=== ERROR DE SUPABASE AL GUARDAR ===");
      console.error("Código de error:", error.code);
      console.error("Mensaje:", error.message);
      console.error("Detalles:", error.details);
      console.error("Hint:", error.hint);
      throw new Error(`Error de base de datos: ${error.message}`);
    }
    
    console.log("=== DATOS GUARDADOS EXITOSAMENTE ===");
    console.log("Respuesta de BD:", data);
    return { success: true, data };
  } catch (error) {
    console.error("=== ERROR GENERAL EN SAVESUBMISSION ===");
    console.error("Tipo de error:", error.constructor.name);
    console.error("Mensaje de error:", error.message);
    console.error("Stack trace:", error.stack);
    return { success: false, error: error.message || "Error desconocido al guardar" };
  }
};

export const sendEmails = async (submission: UserSubmission) => {
  console.log("=== INICIANDO ENVÍO DE EMAILS ===");
  console.log("Email destinatario:", submission.email);
  console.log("Dominio actual:", window.location.origin);
  
  try {
    const { firstName, lastName, email, results } = submission;
    
    const requestBody = {
      firstName,
      lastName,
      userEmail: email,
      results
    };
    
    // Determinar la URL base según el entorno
    const functionUrl = `${SUPABASE_URL}/functions/v1/send-form-emails`;
    
    console.log("URL de función:", functionUrl);
    console.log("Cuerpo de la solicitud:", {
      firstName,
      lastName,
      userEmail: email,
      hasResults: !!results
    });
    
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    console.log("=== RESPUESTA DEL SERVIDOR DE EMAILS ===");
    console.log("Status:", response.status);
    console.log("Status Text:", response.statusText);
    console.log("Headers:", Object.fromEntries(response.headers.entries()));

    if (!response.ok) {
      const errorText = await response.text();
      console.error("=== ERROR EN RESPUESTA DEL SERVIDOR ===");
      console.error("Texto de error:", errorText);
      throw new Error(`Error del servidor de emails: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("=== RESULTADO DEL ENVÍO DE EMAILS ===");
    console.log("Resultado:", result);

    return { success: true, data: result };
  } catch (error) {
    console.error("=== ERROR EN SENDEMAILS ===");
    console.error("Tipo de error:", error.constructor.name);
    console.error("Mensaje:", error.message);
    console.error("Stack trace:", error.stack);
    return { success: false, error: error.message || "Error desconocido al enviar emails" };
  }
};
