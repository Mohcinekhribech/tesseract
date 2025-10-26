import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null

export async function POST(req: Request) {
  try {
    if (!resend) {
      return NextResponse.json(
        { success: false, message: "Email service not configured" },
        { status: 503 }
      )
    }

    const body = await req.json()
    const { firstName, lastName, email, phone, company, interest, message } = body

    if (!firstName || !lastName || !email || !company || !interest || !message) {
      return NextResponse.json(
        { success: false, message: "Tous les champs requis doivent être remplis" },
        { status: 400 }
      )
    }

    const emailTemplate = `
      <div style="font-family: Arial, sans-serif; line-height:1.5; padding:20px; color:#333;">
        <h2 style="color:#4F46E5;">Nouvelle demande de contact - ${interest}</h2>
        <p><strong>Nom:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Téléphone:</strong> ${phone || "N/A"}</p>
        <p><strong>Entreprise:</strong> ${company}</p>
        <p><strong>Intérêt:</strong> ${interest}</p>
        <hr style="margin:20px 0;" />
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      </div>
    `

    const result = await resend.emails.send({
      from: "Tesseract Contact <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      subject: `Nouvelle demande de contact - ${interest}`,
      html: emailTemplate,
    })

    console.log("Email envoyé avec succès:", result)

    return new NextResponse(
      JSON.stringify({ 
        success: true, 
        message: "Message envoyé avec succès !" 
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  } catch (error) {
    console.error("Erreur envoi email:", error)
    return new NextResponse(
      JSON.stringify({ 
        success: false, 
        message: "Échec de l'envoi du message. Veuillez réessayer." 
      }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
  }
}