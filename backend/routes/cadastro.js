const express = require("express");
const router = express.Router();
const controller = require("../controllers/CadastroController");

router.get("/", controller.index);
router.post("/1", controller.criarConta);
router.post("/2", controller.adicionarDadosPessoais);
router.post("/3", controller.adicionarEndereco);

module.exports = router;
