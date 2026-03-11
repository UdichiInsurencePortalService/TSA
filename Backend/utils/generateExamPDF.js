const PDFDocument = require("pdfkit");
const fs = require("fs");
const path = require("path");

module.exports = async function generateExamPDF(examCode, results) {

  const dir = path.join(__dirname, "../tmp");

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir);
  }

  const filePath = path.join(dir, `result_${examCode}.pdf`);

  const doc = new PDFDocument({
    margin: 50,
    size: "A4"
  });

  const stream = fs.createWriteStream(filePath);

  doc.pipe(stream);

  /* ================= LOGOS ================= */

  const leftLogo = path.join(__dirname, "../assets/LOGO3.png");
  const rightLogo = path.join(__dirname, "../assets/udichi-logo.png");

  if (fs.existsSync(leftLogo)) {
    doc.image(leftLogo, 50, 40, { width: 70 });
  }

  if (fs.existsSync(rightLogo)) {
    doc.image(rightLogo, 470, 40, { width: 70 });
  }

  /* ================= HEADER ================= */

  doc
    .fontSize(20)
    .font("Helvetica-Bold")
    .text("Talent & Skill Assessment", 0, 50, {
      align: "center"
    });

  doc
    .moveDown()
    .fontSize(12)
    .font("Helvetica")
    .text(`Exam Code : ${examCode}`, {
      align: "center"
    });

  doc.moveDown(2);

  /* ================= TABLE HEADER ================= */

  const tableTop = 180;

  const column = {
    name: 50,
    mobile: 200,
    total: 290,
    obtained: 350,
    time: 420,
    result: 490
  };

  doc
    .fontSize(12)
    .font("Helvetica-Bold")
    .text("Candidate Name", column.name, tableTop)
    .text("Mobile", column.mobile, tableTop)
    .text("Total", column.total, tableTop)
    .text("Obtained", column.obtained, tableTop)
    .text("Time", column.time, tableTop)
    .text("Result", column.result, tableTop);

  /* HEADER LINE */

  doc
    .moveTo(50, tableTop + 15)
    .lineTo(550, tableTop + 15)
    .stroke();

  /* ================= TABLE ROWS ================= */

  let y = tableTop + 30;

  results.forEach((r) => {

    doc
      .font("Helvetica")
      .fontSize(11)
      .fillColor("black")
      .text(r.candidate_name, column.name, y)
      .text(r.mobile_number, column.mobile, y)
      .text(r.total_marks, column.total, y)
      .text(r.obtained_marks, column.obtained, y)
      .text(`${r.time_taken} min`, column.time, y);

    if (r.result === "PASS") {

      doc
        .fillColor("green")
        .font("Helvetica-Bold")
        .text("PASS ✔", column.result, y);

    } else {

      doc
        .fillColor("red")
        .font("Helvetica-Bold")
        .text("FAIL ✖", column.result, y);
    }

    y += 25;

  });

  /* ================= FOOTER ================= */

  doc
    .moveDown(4)
    .fontSize(10)
    .fillColor("gray")
    .text(
      "This is a system generated exam report by Talent & Skill Assessment platform.",
      { align: "center" }
    );

  doc.end();

  return new Promise((resolve) => {
    stream.on("finish", () => resolve(filePath));
  });

};