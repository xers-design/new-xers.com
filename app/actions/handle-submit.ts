'use server';

import sendEmail from '@/app/actions/send-email';

export default async function handleSubmit(formData: FormData) {
  const fields = ['name', 'email', 'message'];
  const [name, email, message] = fields.map((field) =>
    formData.get(field)
  ) as string[];

  const data = { name, email, message };
  const emailPromises = [
    sendEmail({ to: 'tech.exrs@gmail.com', data }),
    sendEmail({ to: email, data }),
  ];

  const [xersResponse, senderResponse] = await Promise.all(emailPromises);

  if (!xersResponse.success) {
    return { success: false, error: xersResponse.error };
  }

  if (!senderResponse.success) {
    return { success: false, error: senderResponse.error };
  }

  return { success: true, error: null };
}
