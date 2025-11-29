import nodemailer from 'nodemailer'

type MailerEnv = {
  SMTP_HOST?: string
  SMTP_PORT?: string
  SMTP_USER?: string
  SMTP_PASS?: string
  CONTACT_TO?: string
  CONTACT_FROM?: string
}

function getMailerEnv(): Required<MailerEnv> | null {
  const env = process.env as MailerEnv
  if (!env.SMTP_HOST || !env.SMTP_PORT || !env.SMTP_USER || !env.SMTP_PASS) {
    return null
  }
  return {
    SMTP_HOST: env.SMTP_HOST,
    SMTP_PORT: env.SMTP_PORT,
    SMTP_USER: env.SMTP_USER,
    SMTP_PASS: env.SMTP_PASS,
    CONTACT_TO: env.CONTACT_TO || env.SMTP_USER!,
    CONTACT_FROM: env.CONTACT_FROM || `Portfolio <${env.SMTP_USER}>`,
  }
}

export function createTransporter() {
  const env = getMailerEnv()
  if (!env) return { transporter: null as any, env: null }
  const transporter = nodemailer.createTransport({
    host: env.SMTP_HOST,
    port: parseInt(env.SMTP_PORT, 10),
    secure: parseInt(env.SMTP_PORT, 10) === 465,
    auth: {
      user: env.SMTP_USER,
      pass: env.SMTP_PASS,
    },
  })
  return { transporter, env }
}

export async function sendContactEmail(params: {
  name: string
  email: string
  message: string
}) {
  const created = createTransporter()
  const env = created.env
  const transporter = created.transporter

  const text = `New portfolio contact\n\nFrom: ${params.name} <${params.email}>\n\nMessage:\n${params.message}`

  if (!env || !transporter) {
    console.warn('SMTP env not set; skipping email send. Payload:', { ...params })
    return
  }

  await transporter.sendMail({
    to: env.CONTACT_TO,
    from: env.CONTACT_FROM,
    replyTo: params.email,
    subject: `New message from ${params.name}`,
    text,
  })
}


