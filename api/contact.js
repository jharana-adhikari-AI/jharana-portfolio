import nodemailer from 'nodemailer'

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type')

  if (req.method === 'OPTIONS') {
    return res.status(200).end()
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, subject, message } = req.body

  // Validate input
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  try {
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to site owner
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: email,
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    })

    // Auto-reply to sender
    await transporter.sendMail({
      from: `"Jharana Adhikari" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for reaching out!',
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for contacting me! I've received your message and will get back to you as soon as possible.</p>
        <p>Best regards,<br>Jharana Adhikari</p>
      `,
    })

    return res.status(200).json({ success: true, message: 'Email sent successfully' })
  } catch (error) {
    console.error('Email error:', error)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
