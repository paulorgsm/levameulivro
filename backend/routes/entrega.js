const express = require("express");
const router = express.Router();
const controller = require("../controllers/EntregaController");

router.post("/", controller.criar);

module.exports = router;
