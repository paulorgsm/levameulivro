const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");

router.post("/1", controller.criar);
router.post("/2", controller.adicionarDadosPessoais);

module.exports = router;
