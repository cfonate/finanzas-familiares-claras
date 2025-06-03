
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

export const saveSubmission = async (submission: UserSubmission) => {
  console.log("Intentando guardar envío:", submission);
  try {
    const submissionData: FormSubmissionInsert = {
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      answers: submission.answers,
      results: submission.results
    };

    console.log("Datos para insertar:", submissionData);

    const { data, error } = await supabase
      .from("form_submissions")
      .insert(submissionData)
      .select();
      
    if (error) {
      console.error("Error de Supabase al guardar:", error);
      throw error;
    }
    
    console.log("Datos guardados exitosamente:", data);
    return { success: true, data };
  } catch (error) {
    console.error("Error en saveSubmission:", error);
    return { success: false, error };
  }
};

export const sendEmails = async (submission: UserSubmission) => {
  console.log("Iniciando envío de emails para:", submission.email);
  try {
    const { firstName, lastName, email, results } = submission;
    
    const requestBody = {
      firstName,
      lastName,
      userEmail: email,
      results
    };
    
    console.log("Enviando solicitud a:", "https://zjrwvcdjbypdxldtcaws.functions.supabase.co/send-form-emails");
    console.log("Cuerpo de la solicitud:", requestBody);
    
    const response = await fetch(
      "https://zjrwvcdjbypdxldtcaws.functions.supabase.co/send-form-emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${process.env.NODE_ENV === 'development' ? 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpqcnd2Y2RqYnlwZHhsZHRjYXdzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYxNzI0MjksImV4cCI6MjA2MTc0ODQyOX0.5vNVgdgcep_0v_B8aLeyAKZwioKLENBO895_V4QZVk8' : ''}`
        },
        body: JSON.stringify(requestBody)
      }
    );

    console.log("Respuesta del servidor:", response.status, response.statusText);

    if (!response.ok) {
      const errorText = await response.text();
      console.error("Error en la respuesta del servidor:", errorText);
      throw new Error(`Error del servidor: ${response.status} - ${errorText}`);
    }

    const result = await response.json();
    console.log("Resultado del envío de emails:", result);

    return { success: true, data: result };
  } catch (error) {
    console.error("Error en sendEmails:", error);
    return { success: false, error };
  }
};
