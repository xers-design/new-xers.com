"use server";

import { Resend } from "resend";
import XersEmailTemplate from "@/emails/XersTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function sendEmail(formData: FormData) {
  const fields = ["name", "email", "message"];
  const [name, email, message] = fields.map((field) => formData.get(field));

  //   const { data, error } = await resend.emails.send({
  //     from: "Xers <contact@xers.design>",
  //     to: [email as string],
  //     subject: "Xers Email Testing",
  //     react: XersEmailTemplate({ firstName: "John" }),
  //   });

  //   if (error) return error;

  //   console.log({ data });
  //   return data;
  return {};
}
