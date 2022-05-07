import { MailAdapter, SendMailData } from "../MailAdapter";
import { transport } from '../../config/nodemailer';

export class NodeMailerAdapter implements MailAdapter {
  public async sendMail ({ body, subject }: SendMailData) {
    await transport.sendMail({
      from: 'Equipe feedget <oi@feedget.com>',
      to: 'contado.alexandre.costa@gmail.com',
      subject,
      html: body
    });
  };
}