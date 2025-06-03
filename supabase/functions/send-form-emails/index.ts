
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.29.0";

// Required environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";

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
  console.log("Función send-form-emails iniciada");
  console.log("Método:", req.method);
  console.log("Headers:", Object.fromEntries(req.headers.entries()));

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Manejando solicitud OPTIONS/CORS");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const body: EmailRequestBody = await req.json();
    console.log("Cuerpo de la solicitud recibido:", body);
    
    const { firstName, lastName, userEmail, results } = body;
    
    if (!firstName || !lastName || !userEmail || !results) {
      console.error("Campos faltantes:", { firstName, lastName, userEmail, results });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Creando cliente de Supabase...");
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

    console.log("Insertando emails en la cola...");
    const { data, error } = await supabase
      .from("email_queue")
      .insert([
        {
          recipient_name: `${firstName} ${lastName}`,
          recipient_email: userEmail,
          subject: "Resultados de su Evaluación Financiera - IPFF",
          content: `
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
              <p>Si tiene alguna pregunta, puede escribirnos a <strong>hola@ipff.es</strong></p>
              <p>Atentamente,</p>
              <p>El equipo de IPFF</p>
            </div>
          `,
          status: "pending",
          type: "user"
        },
        {
          recipient_name: "Administrador IPFF",
          recipient_email: "francincarlos@gmail.com",
          subject: "Nueva Evaluación Financiera Completada - IPFF",
          content: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
              <h1 style="color: #2E5090;">Nueva Evaluación Completada</h1>
              <p>Un usuario ha completado el cuestionario de finanzas familiares:</p>
              <ul>
                <li><strong>Nombre:</strong> ${firstName} ${lastName}</li>
                <li><strong>Email:</strong> ${userEmail}</li>
                <li><strong>Puntuación:</strong> ${results.percentage}%</li>
                <li><strong>Categoría:</strong> ${results.category}</li>
                <li><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</li>
              </ul>
              <p>Puedes revisar más detalles en el panel de administración.</p>
            </div>
          `,
          status: "pending",
          type: "admin"
        }
      ])
      .select();

    if (error) {
      console.error("Error al insertar en email_queue:", error);
      return new Response(
        JSON.stringify({ error: "Failed to queue emails", details: error }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("Emails insertados exitosamente en la cola:", data);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails queued successfully",
        emailsCreated: data?.length || 0
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error en send-form-emails function:", error);
    
    return new Response(
      JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
