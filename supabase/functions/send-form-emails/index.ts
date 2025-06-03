
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.29.0";
import { Resend } from "npm:resend@4.0.0";

// Required environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";
const RESEND_API_KEY = "re_2keMQHGa_G3FLLjgjF8mTSiiJ5dPg42em";

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

const resend = new Resend(RESEND_API_KEY);

serve(async (req) => {
  console.log("=== FUNCIÓN SEND-FORM-EMAILS INICIADA ===");
  console.log("Método HTTP:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", Object.fromEntries(req.headers.entries()));
  console.log("API Key configurada:", RESEND_API_KEY ? "SÍ" : "NO");
  console.log("API Key valor:", RESEND_API_KEY);

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Manejando solicitud OPTIONS/CORS");
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log("Intentando leer el cuerpo de la solicitud...");
    const body: EmailRequestBody = await req.json();
    console.log("Cuerpo recibido:", JSON.stringify(body, null, 2));
    
    const { firstName, lastName, userEmail, results } = body;
    
    if (!firstName || !lastName || !userEmail || !results) {
      console.error("Campos faltantes:", { firstName, lastName, userEmail, results: !!results });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("=== ENVIANDO EMAIL AL USUARIO ===");
    console.log("Destinatario:", userEmail);
    
    try {
      const userEmailResponse = await resend.emails.send({
        from: "IPFF <hola@ipff.es>",
        to: [userEmail],
        subject: "Resultados de vuestra Evaluación Financiera - IPFF",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <img src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" alt="IPFF Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h1 style="color: #2E5090;">Resultados de su Evaluación Financiera</h1>
            <p>Estimado/a ${firstName} ${lastName},</p>
            <p>Gracias por completar nuestro cuestionario de finanzas familiares.</p>
            <p>Hemos recibido correctamente el cuestionario y en un plazo de 24 a 48 horas recibirás el resultado, una vez que nuestro equipo lo haya analizado</p>
            <p>Si tienes alguna pregunta, puedes escribirnos a <strong>hola@ipff.es</strong></p>
            <p>Atentamente,</p>
            <p>El equipo del Instituto de Planificación Financiera Familiar</p>
          </div>
        `,
      });

      console.log("RESPUESTA EMAIL USUARIO:", JSON.stringify(userEmailResponse, null, 2));
      
      if (userEmailResponse.error) {
        console.error("ERROR EN EMAIL USUARIO:", userEmailResponse.error);
        throw new Error(`Error enviando email usuario: ${userEmailResponse.error.message}`);
      }
    } catch (userEmailError) {
      console.error("EXCEPCIÓN AL ENVIAR EMAIL USUARIO:", userEmailError);
      throw userEmailError;
    }

    console.log("=== ENVIANDO EMAIL AL ADMINISTRADOR ===");
    
    try {
      const adminEmailResponse = await resend.emails.send({
        from: "IPFF <hola@ipff.es>",
        to: ["hola@ipff.es"],
        subject: "Nueva Evaluación Financiera Completada - IPFF",
        html: `
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
            <h2>Detalles completos:</h2>
            <pre>${JSON.stringify(results, null, 2)}</pre>
                      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Puntuación total:</strong> ${results.percentage}%</p>
              <p><strong>Categoría:</strong> ${results.category}</p>
            </div>
          </div>
        `,
      });

      console.log("RESPUESTA EMAIL ADMINISTRADOR:", JSON.stringify(adminEmailResponse, null, 2));
      
      if (adminEmailResponse.error) {
        console.error("ERROR EN EMAIL ADMINISTRADOR:", adminEmailResponse.error);
        throw new Error(`Error enviando email administrador: ${adminEmailResponse.error.message}`);
      }
    } catch (adminEmailError) {
      console.error("EXCEPCIÓN AL ENVIAR EMAIL ADMINISTRADOR:", adminEmailError);
      throw adminEmailError;
    }

    console.log("=== GUARDANDO EN BASE DE DATOS ===");
    const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    
    try {
      const { data, error } = await supabase
        .from("email_queue")
        .insert([
          {
            recipient_name: `${firstName} ${lastName}`,
            recipient_email: userEmail,
            subject: "Resultados de su Evaluación Financiera - IPFF",
            content: "Email enviado via Resend",
            status: "sent",
            type: "user"
          },
          {
            recipient_name: "Administrador IPFF",
            recipient_email: "francincarlos@gmail.com",
            subject: "Nueva Evaluación Financiera Completada - IPFF",
            content: "Email enviado via Resend",
            status: "sent",
            type: "admin"
          }
        ])
        .select();

      if (error) {
        console.error("Error guardando en BD:", error);
      } else {
        console.log("Registros guardados:", data);
      }
    } catch (dbError) {
      console.error("EXCEPCIÓN EN BASE DE DATOS:", dbError);
    }

    console.log("=== FUNCIÓN COMPLETADA EXITOSAMENTE ===");
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully"
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("=== ERROR GENERAL EN LA FUNCIÓN ===");
    console.error("Tipo de error:", error.constructor.name);
    console.error("Mensaje:", error.message);
    console.error("Stack:", error.stack);
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        type: error.constructor.name,
        details: error.stack 
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
