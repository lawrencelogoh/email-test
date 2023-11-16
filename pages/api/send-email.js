import nodemailer from "nodemailer";


export default async function handler(req, res) {
  
    const message = "Heyo"

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
	user: process.env.GMAIL_ACCOUNT,
	pass: process.env.GMAIL_PASSWORD,
      },
    });
    // TODO: Get list of admins and send to them
    transporter
      .sendMail({
	from: `Blue Torus <${process.env.GMAIL_ACCOUNT}>`, // sender address
	to: 'lawrence@torus.blue', // list of receivers
	subject: `Nodemailer email test`, // Subject line
	html: message, // html body
      })
      .then((info) => {
	console.log({ info });
      });
    res.status(200).json({ message: "Heh"})
  
}
