import nodemailer from "nodemailer"
import { MailAdapter, SendMailData } from "../mailAdapter";


const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "becb5578cd6222",
      pass: "ff04702587207d"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
    async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Fulano de tal <sidneyrj45@gmail.com>',
        subject: subject,
        html: body
    })
    }
}