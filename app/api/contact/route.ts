import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const data = await request.json();

    // Tjek om alle nødvendige miljøvariabler er sat
    if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASSWORD) {
      throw new Error('Manglende email konfiguration');
    }

    // Opsæt email transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false, // false for port 587 (TLS)
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD
      },
      tls: {
        ciphers: 'SSLv3'
      }
    });

    // Opret email indhold
    const mailOptions = {
      from: process.env.SMTP_FROM || process.env.SMTP_USER,
      to: 'tstoklund9@gmail.com',
      subject: 'Ny kontaktformular henvendelse',
      text: `
        Navn: ${data.name}
        Email: ${data.email}
        Telefon: ${data.phone}
        Besked: ${data.message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background-color: #4F46E5; padding: 20px; border-radius: 8px 8px 0 0;">
            <h2 style="color: white; margin: 0; font-size: 24px;">Ny henvendelse fra kontaktformular</h2>
          </div>
          <div style="background-color: #ffffff; padding: 20px; border-radius: 0 0 8px 8px; border: 1px solid #e5e7eb;">
            <div style="margin-bottom: 20px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 5px;">Navn:</p>
              <p style="margin: 0; color: #4B5563; background-color: #F9FAFB; padding: 10px; border-radius: 4px;">${data.name}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 5px;">Email:</p>
              <p style="margin: 0; color: #4B5563; background-color: #F9FAFB; padding: 10px; border-radius: 4px;">${data.email}</p>
            </div>
            <div style="margin-bottom: 20px;">
              <p style="font-weight: bold; color: #374151; margin-bottom: 5px;">Telefon:</p>
              <p style="margin: 0; color: #4B5563; background-color: #F9FAFB; padding: 10px; border-radius: 4px;">${data.phone}</p>
            </div>
            <div>
              <p style="font-weight: bold; color: #374151; margin-bottom: 5px;">Besked:</p>
              <p style="margin: 0; color: #4B5563; background-color: #F9FAFB; padding: 10px; border-radius: 4px; white-space: pre-wrap;">${data.message}</p>
            </div>
          </div>
          <div style="text-align: center; margin-top: 20px; color: #6B7280; font-size: 14px;">
            <p>Denne email blev sendt fra kontaktformularen på Tobiasstoklund.dk</p>
          </div>
        </div>
      `
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log('Email sendt:', data);
    
    return NextResponse.json({ message: 'Besked modtaget' }, { status: 200 });
  } catch (error) {
    console.error('Fejl i contact API:', error);
    return NextResponse.json(
      { error: 'Der opstod en fejl ved behandling af din anmodning' },
      { status: 500 }
    );
  }
}