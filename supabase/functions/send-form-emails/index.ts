
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.29.0";

// Required environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY") || "";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EmailRequestBody {
  firstName: string;
  lastName: string;
  userEmail: string;
  results: any;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const body: EmailRequestBody = await req.json();
    const { firstName, lastName, userEmail, results } = body;
    
    if (!firstName || !lastName || !userEmail || !results) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Send email to user
    const userResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Finanzas Familiares IPFF <noreply@ipff.es>",
        to: userEmail,
        subject: "Resultados de su Evaluación Financiera",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <img src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" alt="IPFF Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h1 style="color: #2E5090;">Resultados de su Evaluación Financiera</h1>
            <p>Estimado/a ${firstName} ${lastName},</p>
            <p>Gracias por completar nuestro cuestionario de finanzas familiares. Adjunto encontrará un resumen de sus resultados:</p>
            <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Puntuación total:</strong> ${results.percentage}%</p>
              <p><strong>Categoría:</strong> ${results.category}</p>
            </div>
            <p>Para ver sus resultados completos y recomendaciones personalizadas, puede acceder a nuestro sitio web.</p>
            <p>Atentamente,</p>
            <p>El equipo de IPFF</p>
          </div>
        `,
      }),
    });

    // Send notification to admin
    const adminResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Sistema de Evaluación IPFF <noreply@ipff.es>",
        to: "hola@ipff.es",
        subject: "Nueva Evaluación Financiera Completada",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <h1 style="color: #2E5090;">Nueva Evaluación Completada</h1>
            <p>Un usuario ha completado el cuestionario de finanzas familiares:</p>
            <ul>
              <li><strong>Nombre:</strong> ${firstName} ${lastName}</li>
              <li><strong>Email:</strong> ${userEmail}</li>
              <li><strong>Puntuación:</strong> ${results.percentage}%</li>
              <li><strong>Categoría:</strong> ${results.category}</li>
              <li><strong>Fecha:</strong> ${new Date().toLocaleString()}</li>
            </ul>
          </div>
        `,
      }),
    });

    if (!userResponse.ok || !adminResponse.ok) {
      const errorData = !userResponse.ok 
        ? await userResponse.text() 
        : await adminResponse.text();
      
      console.error("Error sending email:", errorData);
      
      return new Response(
        JSON.stringify({ error: "Failed to send emails" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    return new Response(
      JSON.stringify({ success: true }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error in send-form-emails function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
