const express = require("express");
const router = express.Router();
const controller = require("../controllers/EnderecoController");

router.post("/", controller.criar);

module.exports = router;