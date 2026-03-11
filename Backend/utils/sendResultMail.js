require("dotenv").config();
const nodemailer = require("nodemailer");
const fs = require("fs");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

module.exports = async (examCode, pdfPath) => {

  await transporter.sendMail({
    from: `"Talent & Skill Assessment" <${process.env.EMAIL_USER}>`,
    to: "kunalsharma020401@gmail.com",
    subject: `Exam Result - ${examCode}`,
    text: "Attached exam result report.",
    attachments: [
      {
        filename: `result_${examCode}.pdf`,
        path: pdfPath,
      },
    ],
  });

  fs.unlinkSync(pdfPath);
};