import nodemailer from 'nodemailer';

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "4db570bcfa4d3d",
    pass: "a08ff7359ec142"
  }
});