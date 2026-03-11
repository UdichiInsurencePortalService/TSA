const nodemailer = require("nodemailer");

const sendExamLink = async (req, res) => {
  try {
    const { email, exam_code } = req.body;

    if (!email || !exam_code) {
      return res.status(400).json({
        error: "Email and Exam Code required",
      });
    }

    const attendanceLink = `https://talent-access.vercel.app/attendance?exam_code=${exam_code}`;
    const examLink = `https://talent-access.vercel.app/exam?exam_code=${exam_code}`;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Exam Details",
      html: `
      <h2>Talent Assessment Exam</h2>
      <p><b>Exam Code:</b> ${exam_code}</p>

      <p>Attendance Link:</p>
      <a href="${attendanceLink}">${attendanceLink}</a>

      <br/><br/>

      <p>Exam Link:</p>
      <a href="${examLink}">${examLink}</a>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.json({
      success: true,
      message: "Exam link sent successfully",
    });

  } catch (err) {
    console.log(err);
    res.status(500).json({ error: err.message });
  }
};

module.exports = {
  sendExamLink,
};