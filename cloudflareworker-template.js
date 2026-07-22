/**
 * =======================================================
 *  VVS PROJEKT – Cloudflare Worker (Kontaktformulär)
 * =======================================================
 *
 *  INSTRUKTIONER:
 *  1. Skapa ett Cloudflare Workers-konto om du inte har ett
 *  2. Skapa en ny Worker i Cloudflare Dashboard
 *  3. Klistra in denna kod i Worker-editorn
 *  4. Konfigurera environment-variabler i Workers Settings:
 *     - RESEND_API_KEY: Din API-nyckel från resend.com
 *  5. Deploy workern
 *  6. Kopiera Worker-URL:en och uppdatera `contactFormEndpoint`
 *     i src/config.ts
 *  7. Verifiera din avsändardomän i Resend Dashboard
 *
 *  Se TODO.md för fullständig checklista.
 * =======================================================
 */

export default {
    async fetch(request, env) {
        // ⚠️ TODO: Byt till din riktiga domän efter deploy
        const corsHeaders = {
            "Access-Control-Allow-Origin": "https://vvsprojekt.se",
            "Access-Control-Allow-Methods": "POST, OPTIONS",
            "Access-Control-Allow-Headers": "Content-Type",
        };

        if (request.method === "OPTIONS") {
            return new Response(null, { headers: corsHeaders });
        }

        if (request.method === "POST") {
            try {
                const body = await request.json();

                // Formatera mailets HTML-innehåll med all data från formuläret
                const htmlContent = `
                  <h2>Ny förfrågan via hemsidan</h2>
                  <p><strong>Ärende:</strong> ${body.serviceType || 'Ej angivet'}</p>
                  <p><strong>Namn:</strong> ${body.name || 'Ej angivet'}</p>
                  <p><strong>E-post:</strong> ${body.email || 'Ej angivet'}</p>
                  <p><strong>Telefon:</strong> ${body.phone || 'Ej angivet'}</p>
                  <br>
                  <p><strong>Meddelande:</strong></p>
                  <p>${(body.message || '').replace(/\n/g, '<br>')}</p>
                `;

                // ⚠️ TODO: Byt "from" och "to" till dina riktiga adresser
                const resendPayload = {
                    from: "hemsida@TODO-DIN-DOMAN.se",    // Byt till din verifierade domän i Resend
                    to: "TODO-MOTTAGARE@vvsprojekt.se",   // Byt till din e-postadress
                    subject: `${body.name || 'Webbsidan'} - ${body.serviceType || 'Förfrågan'}`,
                    html: htmlContent,
                    ...(body.email && { reply_to: body.email }),
                };

                // Om attachments bifogades (base64 från frontend), lägg till dem
                if (body.attachments && Array.isArray(body.attachments) && body.attachments.length > 0) {
                    resendPayload.attachments = body.attachments;
                }

                // Anrop till Resend API (kräver RESEND_API_KEY i env)
                const res = await fetch("https://api.resend.com/emails", {
                    method: "POST",
                    headers: {
                        "Authorization": `Bearer ${env.RESEND_API_KEY}`,
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(resendPayload),
                });

                const result = await res.json();

                return new Response(JSON.stringify(result), {
                    status: res.status,
                    headers: { ...corsHeaders, "Content-Type": "application/json" },
                });

            } catch (err) {
                return new Response(JSON.stringify({ error: err.message }), {
                    status: 500,
                    headers: corsHeaders,
                });
            }
        }

        return new Response("Method not allowed", { status: 405 });
    },
};
