const nodemailer = require("nodemailer");
const fs = require("fs");
const path = require("path");
const config = require("./config.json");

const transporter = nodemailer.createTransport({
  service: "gmail",  
  auth: {
    user: config.email,
    pass: config.password,
  },
});

// Email options
const mailOptions = {
  from: config.email,  
  to: "hr@ignitershub.com",  
  subject: "Challenge 3 Completed",  
  text: `
    Hello,

    My name is Chetna.
    MCA Student

    This is the email for Challenge 3 completion.
    Please find the attached image.

    Regards,
    Chetna
  `,
  attachments: [
    {
      filename: "image.jpg",  
      path: path.join(__dirname, "image.jpg"),  
    },
  ],
};

// Send the email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log("Error sending email:", error);
  } else {
    console.log("Email sent: " + info.response);
  }
});
