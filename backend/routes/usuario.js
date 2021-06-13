const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");

router.get("/", controller.index);
router.post("/1", controller.criarConta);
router.post("/2", controller.adicionarDadosPessoais);

module.exports = router;
