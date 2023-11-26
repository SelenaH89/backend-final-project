import * as dotenv from 'dotenv';
import nodemailer from 'nodemailer';

dotenv.config();

export async function sendEmail(email, subject, text) {
  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `InventoryApp <creator.gl01@gmail.com>`,
      to: email,
      subject: subject,
      text: text,
    });

    console.log('Email sent successfully');
  } catch (error) {
    console.log('Email not sent!');
    console.log(error);
    return error;
  }
}
