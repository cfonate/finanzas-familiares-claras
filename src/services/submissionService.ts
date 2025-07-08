
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

// Logging utility for development
const isDevelopment = import.meta.env.DEV;
const secureLog = (message: string, data?: any) => {
  if (isDevelopment) {
    console.log(message, data);
  }
};

const secureError = (message: string, error?: any) => {
  if (isDevelopment) {
    console.error(message, error);
  } else {
    // In production, log minimal error info
    console.error(message);
  }
};

export const saveSubmission = async (submission: UserSubmission) => {
  secureLog("=== INICIANDO GUARDADO DE ENVÍO ===");
  secureLog("Datos del envío:", {
    email: submission.email,
    answersCount: submission.answers?.length || 0,
    hasResults: !!submission.results
  });

  try {
    const submissionData: FormSubmissionInsert = {
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      answers: submission.answers,
      results: submission.results
    };

    secureLog("Insertando datos en BD...");

    const { data, error } = await supabase
      .from("form_submissions")
      .insert(submissionData)
      .select();
      
    if (error) {
      secureError("=== ERROR DE SUPABASE AL GUARDAR ===", {
        code: error.code,
        message: error.message
      });
      throw new Error(`Error de base de datos: ${error.message}`);
    }
    
    secureLog("=== DATOS GUARDADOS EXITOSAMENTE ===");
    return { success: true, data };
  } catch (error) {
    secureError("=== ERROR GENERAL EN SAVESUBMISSION ===", error);
    return { success: false, error: error instanceof Error ? error.message : "Error desconocido al guardar" };
  }
};

export const sendEmails = async (submission: UserSubmission) => {
  secureLog("=== INICIANDO ENVÍO DE EMAILS ===");
  secureLog("Email destinatario:", submission.email);
  
  try {
    const { firstName, lastName, email, results } = submission;
    
    const requestBody = {
      firstName,
      lastName,
      userEmail: email,
      results
    };
    
    // Determine the URL base according to environment
    const functionUrl = `${SUPABASE_URL}/functions/v1/send-form-emails`;
    
    secureLog("URL de función:", functionUrl);
    secureLog("Enviando solicitud...");
    
    const response = await fetch(functionUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${SUPABASE_ANON_KEY}`
      },
      body: JSON.stringify(requestBody)
    });

    secureLog("=== RESPUESTA DEL SERVIDOR DE EMAILS ===");
    secureLog("Status:", response.status);

    if (!response.ok) {
      const errorText = await response.text();
      secureError("=== ERROR EN RESPUESTA DEL SERVIDOR ===");
      throw new Error(`Error del servidor de emails: ${response.status}`);
    }

    const result = await response.json();
    secureLog("=== RESULTADO DEL ENVÍO DE EMAILS ===");
    secureLog("Emails enviados exitosamente");

    return { success: true, data: result };
  } catch (error) {
    secureError("=== ERROR EN SENDEMAILS ===", error);
    return { success: false, error: error instanceof Error ? error.message : "Error desconocido al enviar emails" };
  }
};
