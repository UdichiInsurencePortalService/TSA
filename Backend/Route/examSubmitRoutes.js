const express = require("express");

const router = express.Router();

const {
  submitExam
} = require("../Controller/examSubmitController");

router.post("/submit", submitExam);

module.exports = router;