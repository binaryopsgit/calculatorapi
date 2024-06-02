const express = require("express");
const calController = require("../controller/cal");
const router = express.Router();

router.post("/cal", calController.calculator);

module.exports = router;
