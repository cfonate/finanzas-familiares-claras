
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

// Eliminado: constantes hardcodeadas de Supabase (URL y ANON key). Ahora usamos supabase.functions.invoke para mayor seguridad y compatibilidad.

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
    
    secureLog("Invocando edge function send-form-emails vía Supabase...");
    const { data: result, error: fnError } = await supabase.functions.invoke('send-form-emails', {
      body: requestBody,
    });

    if (fnError) {
      secureError("=== ERROR EN RESPUESTA DEL SERVIDOR ===", fnError);
      throw new Error(`Error del servidor de emails: ${fnError.message || 'desconocido'}`);
    }

    secureLog("=== RESULTADO DEL ENVÍO DE EMAILS ===");
    secureLog("Emails enviados exitosamente");

    return { success: true, data: result };
  } catch (error) {
    secureError("=== ERROR EN SENDEMAILS ===", error);
    return { success: false, error: error instanceof Error ? error.message : "Error desconocido al enviar emails" };
  }
};
