
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
  try {
    const submissionData: FormSubmissionInsert = {
      first_name: submission.firstName,
      last_name: submission.lastName,
      email: submission.email,
      answers: submission.answers,
      results: submission.results
    };

    const { data, error } = await supabase
      .from("form_submissions")
      .insert(submissionData);
      
    if (error) {
      console.error("Error saving submission:", error);
      throw error;
    }
    
    return { success: true, data };
  } catch (error) {
    console.error("Error in saveSubmission:", error);
    return { success: false, error };
  }
};

export const sendEmails = async (submission: UserSubmission) => {
  try {
    const { firstName, lastName, email, results } = submission;
    
    const response = await fetch(
      "https://zjrwvcdjbypdxldtcaws.functions.supabase.co/send-form-emails",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          firstName,
          lastName,
          userEmail: email,
          results
        })
      }
    );

    if (!response.ok) {
      const errorData = await response.text();
      console.error("Error sending emails:", errorData);
      throw new Error("Failed to send emails");
    }

    return { success: true };
  } catch (error) {
    console.error("Error in sendEmails:", error);
    return { success: false, error };
  }
};
