const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");
const upload = require("../middlewares/UsuarioMulter");

router.get("/login", controller.fazerLogin);
router.post("/criar-conta", controller.criarConta);
router.post("/adicionar-dados-pessoais", controller.addDadosPessoais);
router.put("/", upload.single("foto_usuario"), controller.atualizarDados);
router.delete("/", controller.deletarConta);

module.exports = router;
