const pool = require("../Model/postgressdb");
const generateExamPDF = require("../utils/generateExamPDF");
const sendResultMail = require("../utils/sendResultMail");

exports.submitExam = async (req, res) => {
  try {
    const {
      exam_code,
      candidate_name,
      father_name,
      mobile_number,
      language,
      answers,
      time_taken,
      reason,
    } = req.body;

    if (!exam_code || !mobile_number || !answers) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const questionIds = Object.keys(answers);

    const questionQuery = await pool.query(
      `SELECT id, correct_option
       FROM questions
       WHERE id = ANY($1::int[])`,
      [questionIds]
    );

    let obtained_marks = 0;

    questionQuery.rows.forEach((q) => {
      const studentAnswer = answers[q.id];

      if (
        studentAnswer &&
        studentAnswer.toLowerCase() ===
          q.correct_option.toLowerCase()
      ) {
        obtained_marks += 4;
      }
    });

    const total_marks = questionIds.length * 4;

    const result =
      obtained_marks >= total_marks * 0.6 ? "PASS" : "FAIL";

    /* ================= SAVE RESULT ================= */

    await pool.query(
      `INSERT INTO exam_results
      (exam_code,candidate_name,father_name,mobile_number,
       total_marks,obtained_marks,result,answers,time_taken,
       language,reason)
       VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
      [
        exam_code,
        candidate_name,
        father_name,
        mobile_number,
        total_marks,
        obtained_marks,
        result,
        JSON.stringify(answers),
        time_taken,
        language,
        reason,
      ]
    );

    /* ================= RESPONSE ================= */

    res.status(200).json({
      success: true,
      data: {
        total_marks,
        obtained_marks,
        result,
      },
    });

    /* ================= BACKGROUND PROCESS ================= */

    process.nextTick(async () => {
      try {
        const results = await pool.query(
          `SELECT candidate_name,
                  mobile_number,
                  total_marks,
                  obtained_marks,
                  result
           FROM exam_results
           WHERE exam_code=$1
           ORDER BY submitted_at ASC`,
          [exam_code]
        );

        if (results.rows.length === 0) return;

        const pdfPath = await generateExamPDF(
          exam_code,
          results.rows
        );

        await sendResultMail(exam_code, pdfPath);

      } catch (err) {
        console.error("PDF MAIL ERROR:", err);
      }
    });

  } catch (error) {
    console.error("SERVER ERROR:", error);

    res.status(500).json({
      success: false,
      message: "Server Error",
    });
  }
};