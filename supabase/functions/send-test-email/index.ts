
import { serve } from "https://deno.land/std@0.177.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("re_B8iLBh2r_PNz7QeURbi594f7eHaugRtSS"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface TestEmailBody {
  to: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { to }: TestEmailBody = await req.json();

    // Envía un correo de prueba
    const { data, error } = await resend.emails.send({
      from: "IPFF <hola@ipff.es>",
      to,
      subject: "¡Correo de prueba desde IPFF via Resend!",
      html: `
        <h1>Prueba de envío</h1>
        <p>¡Este es un correo de prueba enviado desde tu app utilizando Resend!</p>
        <hr />
        <p>Si recibiste esto, todo está funcionando correctamente 🎉</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return new Response(JSON.stringify({ error: error.message }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.error("Error processing request:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Unknown error" }),
      {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      }
    );
  }
});
