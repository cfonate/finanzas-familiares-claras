
import { useState, useCallback } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Database } from "@/integrations/supabase/types";

type FormSubmission = Database['public']['Tables']['form_submissions']['Row'];
type EmailQueueItem = Database['public']['Tables']['email_queue']['Row'];

interface Submission {
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

export const useAdminData = () => {
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [emailQueue, setEmailQueue] = useState<EmailQueueItem[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      // Fetch submissions
      const { data: submissionsData, error: submissionsError } = await supabase
        .from("form_submissions")
        .select("*")
        .order("created_at", { ascending: false });

      if (submissionsError) throw submissionsError;

      // Transform data to match Submission interface
      const transformedSubmissions: Submission[] = submissionsData.map((item: FormSubmission) => ({
        id: item.id,
        created_at: item.created_at,
        first_name: item.first_name,
        last_name: item.last_name,
        email: item.email,
        results: item.results as { percentage?: number; category?: string }
      }));

      setSubmissions(transformedSubmissions);

      // Fetch email queue
      const { data: emailQueueData, error: emailQueueError } = await supabase
        .from("email_queue")
        .select("*")
        .order("created_at", { ascending: false });

      if (emailQueueError) throw emailQueueError;
      setEmailQueue(emailQueueData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  // Helper function to get current date for filename
  const getDateForFilename = () => {
    const now = new Date();
    return `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, '0')}${String(now.getDate()).padStart(2, '0')}`;
  };

  // Export data to CSV
  const exportToCSV = (data: any[], filename: string) => {
    if (!data.length) return;

    // Get headers from the first item
    const headers = Object.keys(data[0]);

    // Create CSV content
    const csvRows = [
      headers.join(','), // Header row
      ...data.map(item => headers.map(header => {
        const val = item[header];
        // Handle nested objects
        const cellVal = typeof val === 'object' && val !== null 
          ? JSON.stringify(val).replace(/"/g, '""')
          : val;
        
        // Ensure proper CSV escaping
        return `"${String(cellVal).replace(/"/g, '""')}"`;
      }).join(','))
    ];

    // Create a blob and download the file
    const csvContent = csvRows.join('\r\n');
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', filename);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Export emails for hosting
  const exportEmailsForHosting = () => {
    // Filter only pending emails
    const pendingEmails = emailQueue.filter(email => email.status === 'pending');
    
    if (pendingEmails.length === 0) {
      alert('No hay emails pendientes para exportar.');
      return;
    }
    
    // Format data for export
    const exportData = pendingEmails.map(email => ({
      id: email.id,
      recipient_name: email.recipient_name,
      recipient_email: email.recipient_email,
      subject: email.subject,
      type: email.type
    }));
    
    // Create JSON file
    const jsonContent = JSON.stringify(exportData, null, 2);
    const blob = new Blob([jsonContent], { type: 'application/json' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    
    link.setAttribute('href', url);
    link.setAttribute('download', `pending_emails_${getDateForFilename()}.json`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Handle file input for updating email status
  const handleUpdateEmailStatus = () => {
    const fileInput = document.createElement('input');
    fileInput.type = 'file';
    fileInput.accept = 'application/json';
    
    fileInput.onchange = async (e) => {
      const target = e.target as HTMLInputElement;
      if (!target.files?.length) return;
      
      const file = target.files[0];
      const reader = new FileReader();
      
      reader.onload = async (event) => {
        try {
          const content = event.target?.result as string;
          const data = JSON.parse(content);
          
          if (!Array.isArray(data) || !data.length || !data[0].id) {
            alert('Formato de archivo inválido. Se espera un array de objetos con IDs.');
            return;
          }
          
          setLoading(true);
          
          // Extract IDs from the uploaded file
          const emailIds = data.map(item => item.id);
          
          // Update status in Supabase
          const { error } = await supabase
            .from('email_queue')
            .update({ status: 'sent' })
            .in('id', emailIds);
          
          if (error) {
            alert(`Error al actualizar el estado: ${error.message}`);
          } else {
            alert(`${emailIds.length} emails marcados como enviados.`);
            fetchData(); // Refresh data
          }
        } catch (error) {
          console.error('Error processing file:', error);
          alert('Error al procesar el archivo JSON.');
        } finally {
          setLoading(false);
        }
      };
      
      reader.readAsText(file);
    };
    
    fileInput.click();
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
