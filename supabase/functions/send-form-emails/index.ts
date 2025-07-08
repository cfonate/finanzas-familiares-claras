
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.29.0";
import { Resend } from "npm:resend@4.0.0";

// Required environment variables
const SUPABASE_URL = Deno.env.get("SUPABASE_URL") || "";
const SUPABASE_ANON_KEY = Deno.env.get("SUPABASE_ANON_KEY") || "";
const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

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

// Validate required environment variables
if (!RESEND_API_KEY) {
  console.error("RESEND_API_KEY is not configured");
}

const resend = new Resend(RESEND_API_KEY);

// HTML sanitization function
function sanitizeHtml(html: string): string {
  return html
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

serve(async (req) => {
  console.log("=== FUNCIÓN SEND-FORM-EMAILS INICIADA ===");
  console.log("Método HTTP:", req.method);
  console.log("API Key configurada:", RESEND_API_KEY ? "SÍ" : "NO");

  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    console.log("Manejando solicitud OPTIONS/CORS");
    return new Response(null, { headers: corsHeaders });
  }

  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY no está configurada");
    return new Response(
      JSON.stringify({ error: "Email service not configured" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }

  try {
    console.log("Intentando leer el cuerpo de la solicitud...");
    const body: EmailRequestBody = await req.json();
    
    const { firstName, lastName, userEmail, results } = body;
    
    if (!firstName || !lastName || !userEmail || !results) {
      console.error("Campos faltantes:", { firstName, lastName, userEmail, results: !!results });
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Sanitize user input
    const safeFirstName = sanitizeHtml(firstName);
    const safeLastName = sanitizeHtml(lastName);

    console.log("=== ENVIANDO EMAIL DE CONFIRMACIÓN AL USUARIO ===");
    console.log("Destinatario:", userEmail);
    
    try {
      const userEmailResponse = await resend.emails.send({
        from: "IPFF <hola@ipff.es>",
        to: [userEmail],
        subject: "Hemos recibido tu cuestionario - IPFF",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <img src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" alt="IPFF Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h1 style="color: #2E5090;">¡Gracias por completar el cuestionario!</h1>
            <p>Estimado/a ${safeFirstName} ${safeLastName},</p>
            <p>Hemos recibido correctamente tu cuestionario de finanzas familiares.</p>
            <p><strong>Un miembro de nuestro equipo revisará tu información y se pondrá en contacto contigo en un plazo de 24 a 48 horas.</strong></p>
            <p>Si tienes alguna pregunta urgente, puedes escribirnos a <strong>hola@ipff.es</strong></p>
            <p>Atentamente,</p>
            <p>El equipo del Instituto de Planificación Financiera Familiar</p>
          </div>
        `,
      });

      console.log("Email usuario enviado exitosamente");
      
      if (userEmailResponse.error) {
        console.error("ERROR EN EMAIL USUARIO:", userEmailResponse.error);
        throw new Error(`Error enviando email usuario: ${userEmailResponse.error.message}`);
      }
    } catch (userEmailError) {
      console.error("EXCEPCIÓN AL ENVIAR EMAIL USUARIO:", userEmailError);
      throw userEmailError;
    }

    console.log("=== ENVIANDO EMAIL COMPLETO AL ADMINISTRADOR ===");
    
    // Create the detailed results content
    const createSectionDetails = () => {
      if (!results.sectionScores || !Array.isArray(results.sectionScores)) {
        return "<p>No se encontraron detalles por sección</p>";
      }
      
      const sectionNames = {
        1: "Situación Familiar",
        2: "Ingresos", 
        3: "Gastos",
        4: "Ahorro",
        5: "Deudas",
        6: "Seguros",
        7: "Planificación Financiera",
        8: "Ingresos Adicionales",
        9: "Inversiones",
        10: "Objetivos a Largo Plazo",
        11: "Hábitos Financieros"
      };
      
      return results.sectionScores.map(section => `
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><strong>${sectionNames[section.sectionId] || `Sección ${section.sectionId}`}</strong></td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${section.score}/${section.total}</td>
          <td style="padding: 8px; border: 1px solid #ddd; text-align: center;">${section.percentage}%</td>
        </tr>
      `).join('');
    };

    const createRecommendationsList = () => {
      if (!results.recommendations || !Array.isArray(results.recommendations)) {
        return "<p>No hay recomendaciones disponibles</p>";
      }
      
      return results.recommendations.map(rec => `<li style="margin-bottom: 8px;">${sanitizeHtml(rec)}</li>`).join('');
    };

    try {
      const adminEmailResponse = await resend.emails.send({
        from: "IPFF <hola@ipff.es>",
        to: ["hola@ipff.es"],
        subject: "Nueva Evaluación Financiera Completada - IPFF",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto;">
            <img src="https://ipff.es/wp-content/uploads/2025/04/Logo_home.svg" alt="IPFF Logo" style="max-width: 150px; margin-bottom: 20px;">
            <h1 style="color: #2E5090;">Nueva Evaluación Financiera Completada</h1>
            
            <h2 style="color: #2E5090;">Información del Usuario</h2>
            <div style="background-color: #f8f9fa; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Nombre:</strong> ${safeFirstName} ${safeLastName}</p>
              <p><strong>Email:</strong> ${userEmail}</p>
              <p><strong>Fecha:</strong> ${new Date().toLocaleString('es-ES')}</p>
            </div>

            <h2 style="color: #2E5090;">Resumen de Resultados</h2>
            <div style="background-color: #e8f4f8; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <p><strong>Puntuación Total:</strong> ${results.totalScore}/${results.maxPossibleScore} puntos (${results.percentage}%)</p>
              <p><strong>Categoría:</strong> <span style="font-size: 18px; font-weight: bold; color: #2E5090;">${sanitizeHtml(results.category)}</span></p>
            </div>

            <h2 style="color: #2E5090;">Análisis Detallado por Sección</h2>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <thead>
                <tr style="background-color: #2E5090; color: white;">
                  <th style="padding: 10px; border: 1px solid #ddd;">Sección</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Puntuación</th>
                  <th style="padding: 10px; border: 1px solid #ddd;">Porcentaje</th>
                </tr>
              </thead>
              <tbody>
                ${createSectionDetails()}
              </tbody>
            </table>

            <h2 style="color: #2E5090;">Recomendaciones Personalizadas</h2>
            <div style="background-color: #fff3cd; padding: 15px; border-radius: 5px; margin: 20px 0;">
              <ol style="margin: 0; padding-left: 20px;">
                ${createRecommendationsList()}
              </ol>
            </div>

            <hr style="margin: 30px 0;">
            <p style="color: #666; font-size: 12px;">
              Este email ha sido generado automáticamente por el sistema de evaluación financiera del IPFF.
            </p>
          </div>
        `,
      });

      console.log("Email administrador enviado exitosamente");
      
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
            recipient_name: `${safeFirstName} ${safeLastName}`,
            recipient_email: userEmail,
            subject: "Hemos recibido tu cuestionario - IPFF",
            content: "Email de confirmación enviado via Resend",
            status: "sent",
            type: "user"
          },
          {
            recipient_name: "Administrador IPFF",
            recipient_email: "hola@ipff.es",
            subject: "Nueva Evaluación Financiera Completada - IPFF",
            content: "Email con resultados completos enviado via Resend",
            status: "sent",
            type: "admin"
          }
        ])
        .select();

      if (error) {
        console.error("Error guardando en BD:", error);
      } else {
        console.log("Registros guardados exitosamente");
      }
    } catch (dbError) {
      console.error("EXCEPCIÓN EN BASE DE DATOS:", dbError);
    }

    console.log("=== FUNCIÓN COMPLETADA EXITOSAMENTE ===");
    return new Response(
      JSON.stringify({ 
        success: true, 
        message: "Emails sent successfully",
        userEmail: userEmail,
        adminEmail: "hola@ipff.es"
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (error) {
    console.error("=== ERROR GENERAL EN LA FUNCIÓN ===");
    console.error("Tipo de error:", error.constructor.name);
    console.error("Mensaje:", error.message);
    
    return new Response(
      JSON.stringify({ 
        error: "Internal server error",
        type: error.constructor.name
      }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
