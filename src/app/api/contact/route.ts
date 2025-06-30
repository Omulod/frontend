import { mailOptions, transporter } from "@/config/nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    // Get form fields
    const email = formData.get("email") as string;
    const name = formData.get("name") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    // Get file attachment (if any)
    const file = formData.get("attachment") as File | null;

    // Prepare email options
    const emailOptions: any = {
      ...mailOptions,
      subject: "Omulod - New Contact Form Submission",
      text: `New email from Omulod - ${email}\nMessage: ${message}`,
      html: `
          <div style="font-family: Arial, sans-serif; padding: 20px; background-color: #f9f9f9; color: #333;">
            <h2 style="color: #fbbc05;">📬 New Contact Form Submission</h2>
            <p style="font-size: 16px;">You have received a new message from <strong>Omulod.com</strong>.</p>

            <table style="width: 100%; margin-top: 20px; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Name:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Email:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd;"><strong>Budget:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${budget}</td>
              </tr>
              <tr>
                <td style="padding: 8px; border: 1px solid #ddd; vertical-align: top;"><strong>Message:</strong></td>
                <td style="padding: 8px; border: 1px solid #ddd;">${message.replace(
                  /\n/g,
                  "<br/>"
                )}</td>
              </tr>
            </table>

            <p style="margin-top: 30px; font-size: 14px; color: #777;">
              This message was sent via the contact form on <strong>Omulod.com</strong>.
            </p>
          </div>
        `,
      replyTo: email,
    };

    // Add attachment if file exists
    if (file && file.size > 0) {
      const buffer = Buffer.from(await file.arrayBuffer());

      emailOptions.attachments = [
        {
          filename: file.name,
          content: buffer,
          contentType: file.type,
        },
      ];
    }

    await transporter.sendMail(emailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("Email sending error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 }
    );
  }
}
