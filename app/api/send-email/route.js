// app/api/send/route.ts (ถ้าใช้ App Router)
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  const { to, subject, text } = await req.json();

  try {
    const data = await resend.emails.send({
      from: "Your App <onboarding@resend.dev>",
      to,
      subject,
      text,
    });

    return Response.json({ success: true, data });
  } catch (error) {
    return Response.json({ success: false, error });
  }
}
