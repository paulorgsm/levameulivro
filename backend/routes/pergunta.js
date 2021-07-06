const express = require("express");
const router = express.Router();
const controller = require("../controllers/PerguntaController");

router.post("/criar-pergunta", controller.create);
router.post("/adicionar-resposta", controller.addResposta);

module.exports = router;
