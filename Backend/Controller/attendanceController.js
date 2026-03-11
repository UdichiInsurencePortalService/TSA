const fs = require("fs");
const path = require("path");
const attendanceModel = require("../Model/attendanceModel");
const { getDistanceMeters } = require("../utils/geoDistance");

exports.submitAttendance = async (req, res) => {
  try {
    const {
      exam_code,
      fullName,
      fatherName,
      mobileNumber,
      aadharNumber,
      candidateLat,
      candidateLng,
      photoBase64,
      institution_name,
    } = req.body;

    // ✅ Validation
    if (!exam_code || !fullName || !aadharNumber || !photoBase64) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    const cleanExamCode = exam_code.trim();

    // ✅ Fetch exam center (ONLY exam_code)
    const center = await attendanceModel.getExamCenter(cleanExamCode);

    if (!center) {
      return res.status(404).json({
        success: false,
        message: "Invalid Exam Code",
      });
    }

    // ✅ Calculate distance
    const distance = getDistanceMeters(
      center.center_lat,
      center.center_lng,
      candidateLat,
      candidateLng
    );

    const attendance_status =
      distance <= center.allowed_radius ? "IN_CENTER" : "OUTSIDE_CENTER";

    // ================= PHOTO SAVE =================

    const uploadDir = path.join(__dirname, "../uploads/attendance");

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    const fileName = `${Date.now()}_${aadharNumber}.jpg`;
    const filePath = path.join(uploadDir, fileName);

    const base64Data = photoBase64.replace(/^data:image\/\w+;base64,/, "");

    fs.writeFileSync(filePath, Buffer.from(base64Data, "base64"));

    const photoPath = `/uploads/attendance/${fileName}`;

    // ================= SAVE DB =================

    await attendanceModel.saveAttendance({
      exam_code: cleanExamCode,
      full_name: fullName,
      father_name: fatherName,
      mobile_number: mobileNumber,
      aadhar_number: aadharNumber,
      institution_name: institution_name,
      photo_path: photoPath,
      candidate_lat: candidateLat,
      candidate_lng: candidateLng,
      distance_meters: distance,
      attendance_status,
    });

    return res.status(200).json({
      success: true,
      message: "Attendance Submitted",
      attendance_status,
      distance_meters: distance,
    });
  } catch (error) {
    console.error("Attendance Error:", error);

    return res.status(500).json({
      success: false,
      message: "Attendance submission failed",
    });
  }
};

// ================= GET ALL ATTENDANCE =================

exports.getAllAttendance = async (req, res) => {
  try {
    const data = await attendanceModel.getAllAttendance();

    const host = `${req.protocol}://${req.get("host")}`;

    const formatted = data.map((item) => ({
      ...item,
      photo_url: item.photo_path ? `${host}${item.photo_path}` : null,
    }));

    res.status(200).json({
      success: true,
      total: formatted.length,
      data: formatted,
    });
  } catch (error) {
    console.error("Fetch Attendance Error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch attendance",
    });
  }
};