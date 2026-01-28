import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY || "");
const CONTACT_TO = process.env.CONTACT_TO || "info@fohrer-immobilien.de";
const CONTACT_FROM = process.env.CONTACT_FROM || "Gartenresidenz <noreply@example.com>";

export const handler = async (event) => {
  console.log("Function called, method:", event.httpMethod);
  
  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: "method_not_allowed" }),
    };
  }

  const body = JSON.parse(event.body || "{}");
  const { name, email, phone, apartment_interest, message } = body;
  
  console.log("Request data:", { name, email, apartment_interest });

  if (!name || !email) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "missing_fields" }),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    console.error("RESEND_API_KEY missing!");
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "missing_resend_key" }),
    };
  }

  const apartment = apartment_interest && apartment_interest !== "general"
    ? apartment_interest
    : "Allgemeine Informationen";

  const text = [
    `Name: ${name}`,
    `E-Mail: ${email}`,
    `Telefon: ${phone || "-"}`,
    `Interesse an: ${apartment}`,
    "",
    "Nachricht:",
    message?.trim() ? message : "-",
  ].join("\n");

  console.log("Sending email to:", CONTACT_TO, "from:", CONTACT_FROM);

  try {
    const result = await resend.emails.send({
      from: CONTACT_FROM,
      to: [CONTACT_TO],
      replyTo: email,
      subject: `Neue Anfrage - ${apartment}`,
      text,
    });

    console.log("Email sent successfully:", result);

    return {
      statusCode: 200,
      body: JSON.stringify({ ok: true }),
    };
  } catch (error) {
    console.error("Resend send error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "send_failed", details: error.message }),
    };
  }
};
