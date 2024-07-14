'use server';

import { Resend } from 'resend';
import XersEmailTemplate from '@/emails/XersTemplate';
import SenderEmailTemplate from '@/emails/SenderTemplate';

const resend = new Resend(process.env.RESEND_API_KEY);

const subjects: Record<string, (name?: string) => string> = {
  xers: (name) => `Xers.design Received a Submission from ${name}.`,
  sender: (name) => `Hi ${name}, Xers Received You Message.`,
};

const templates: Record<string, any> = {
  xers: (data: any) => XersEmailTemplate(data),
  sender: (data: any) => SenderEmailTemplate(data),
};

type EmailData = {
  to: string;
  data: {
    name: string;
    email: string;
    message: string;
  };
};

export default async function sendEmail(emailData: EmailData) {
  const { to, data } = emailData;
  const { name, email, message } = data;
  const type = to === 'tech.exrs@gmail.com' ? 'xers' : 'sender';

  const { error } = await resend.emails.send({
    from: 'Xers <contact@xers.design>',
    to,
    subject: subjects[type](name.split(' ')[0] || ''),
    react: templates[type]({ name, email, message }),
  });

  if (error) return { success: false, error };

  return { success: true, error: null };
}
