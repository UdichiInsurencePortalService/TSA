const express = require("express");
const router = express.Router();

const { sendExamLink } = require("../Controller/candidateController");

router.post("/exam/send-link", sendExamLink);

module.exports = router;