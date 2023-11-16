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

  const mailData = {
    	from: `Blue Torus <${process.env.GMAIL_ACCOUNT}>`, // sender address
	to: 'lawrence@torus.blue', // list of receivers
	subject: `Nodemailer email test`, // Subject line
	html: message, // html body
  }
    
  await new Promise((resolve, reject) => {
    // send mail
    
    transporter.sendMail(mailData, (err, info) => {
      if (err) {
        console.error(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
    
    res.status(200).json({ message: "Heh"})
    
  }
