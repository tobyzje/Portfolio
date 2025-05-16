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
      from: process.env.SMTP_FROM,
      to: process.env.SMTP_USER,
      subject: 'Ny kontaktformular henvendelse',
      text: `
        Navn: ${data.name}
        Email: ${data.email}
        Telefon: ${data.phone}
        Besked: ${data.message}
      `,
      html: `
        <div style="font-family: 'Inter', Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #F6FDFB; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 32px 0 #0000000d;">
          <div style="background: linear-gradient(90deg, #10B981 0%, #059669 100%); padding: 32px 24px 24px 24px; text-align: center;">
            <img src='https://cdn.jsdelivr.net/gh/twitter/twemoji@14.0.2/assets/72x72/1f4e7.png' alt='Mail ikon' width='48' height='48' style='margin-bottom: 12px;' />
            <h2 style="color: #fff; margin: 0; font-size: 28px; font-weight: 800; letter-spacing: -1px;">Ny henvendelse fra kontaktformular</h2>
          </div>
          <div style="background: #fff; padding: 32px 24px 24px 24px; border-radius: 0 0 16px 16px; border-top: 1px solid #E5E7EB;">
            <div style="margin-bottom: 24px;">
              <p style="font-weight: 600; color: #10B981; margin-bottom: 6px; font-size: 15px;">Navn</p>
              <div style="color: #374151; background: #F0FDF4; padding: 12px 16px; border-radius: 8px; font-size: 16px;">${data.name}</div>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="font-weight: 600; color: #10B981; margin-bottom: 6px; font-size: 15px;">Email</p>
              <div style="color: #374151; background: #F0FDF4; padding: 12px 16px; border-radius: 8px; font-size: 16px;">${data.email}</div>
            </div>
            <div style="margin-bottom: 24px;">
              <p style="font-weight: 600; color: #10B981; margin-bottom: 6px; font-size: 15px;">Telefon</p>
              <div style="color: #374151; background: #F0FDF4; padding: 12px 16px; border-radius: 8px; font-size: 16px;">${data.phone}</div>
            </div>
            <div style="margin-bottom: 8px;">
              <p style="font-weight: 600; color: #10B981; margin-bottom: 6px; font-size: 15px;">Besked</p>
              <div style="color: #374151; background: #F0FDF4; padding: 16px 16px; border-radius: 8px; font-size: 16px; white-space: pre-wrap;">${data.message}</div>
            </div>
          </div>
          <div style="text-align: center; margin: 0; color: #6B7280; font-size: 13px; padding: 18px 0 10px 0; background: #F6FDFB; border-radius: 0 0 16px 16px;">
            <p style="margin: 0;">Denne email blev sendt fra kontaktformularen på <b>tobiasstoklund.dk</b></p>
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