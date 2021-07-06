const controller = require("../controllers/PerguntaController");
const autorizacao = require("../middlewares/Autorizacao");
const express = require("express");
const router = express.Router();

router.post("/criar-pergunta", autorizacao, controller.create);
router.post("/adicionar-resposta", autorizacao, controller.addResposta);

module.exports = router;
