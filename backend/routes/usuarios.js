const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");
const autorizacao = require("../middlewares/Autorizacao");
const upload = require("../middlewares/UsuarioMulter");

router.get("/login", controller.fazerLogin);
router.post("/criar-conta", controller.criarConta);
router.post(
  "/adicionar-dados-pessoais",
  autorizacao,
  controller.addDadosPessoais
);
router.put(
  "/",
  autorizacao,
  upload.single("foto_usuario"),
  controller.atualizarDados
);
router.delete("/", autorizacao, controller.deletarConta);

module.exports = router;
