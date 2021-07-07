const controller = require("../controllers/PerguntaController");
const autorizacao = require("../middlewares/Autorizacao");
const express = require("express");
const router = express.Router();

router.post("/", autorizacao, controller.create);

module.exports = router;
