// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import type { NextApiRequest, NextApiResponse } from "next";
import type { ContactDetails } from "../../sections/contact-section/ContactSection";
import nodemailer from "nodemailer";
import { generateEmail } from "../../utils/successEmail";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const user: ContactDetails = req.body.user;
    let transporter = nodemailer.createTransport({
      host: process.env.SMTP_ENDPOINT,
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // send mail with defined transport object
    let emailToClient = await transporter.sendMail({
      from: `"Bate Tanyi" <${process.env.MY_EMAIL}>`, // sender address
      to: `${user.email}`, // list of receivers
      subject: "Thank you", // Subject line
      text: "Tgank you, your query has been received.", // plain text body
      html: generateEmail(user.firstName), // html body
    });

    let emailToMyself = await transporter.sendMail({
      from: `"btanyi.io" <${process.env.MY_EMAIL2}>`, // sender address
      to: `${process.env.MY_EMAIL}`, // list of receivers
      subject: "Client query", // Subject line
      text: `${user.firstName} ${user.lastName} <${user.email}> has asked "${user.message}"`, // html body
    });

    res
      .status(200)
      .json({ message: `Message sent: ${emailToClient.messageId}` });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: "Faled to send email" });
  }
};
