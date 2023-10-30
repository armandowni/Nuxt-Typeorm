import * as nodemailer from "nodemailer";

export const transporter = nodemailer.createTransport({
  service: "SendinBlue",
  auth: {
    user: "armando.nurimansyah@gmail.com",
    pass: "2W0fwGyBKrH6OCTU",
  },
});

export declare type MessageProps = {
  emailFrom?: string;
  message: string;
  name?: string;
  subject: string;
};

export const sendMail = async (message: MessageProps) =>
  await transporter.sendMail({
    from: `${message.name}<${message.emailFrom}>`,
    to: "armando.nurimansyah@gmail.com",
    subject: message.subject,
    text: message.message,
  });
