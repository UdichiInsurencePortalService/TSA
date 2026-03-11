const express = require("express");
const router = express.Router();

const candidateController = require("../Controller/candidateController");

router.post("/exam/send-link", candidateController.sendExamLink);

module.exports = router;