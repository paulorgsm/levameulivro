const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");
const autorizacao = require("../middlewares/Autorizacao");
const upload = require("../middlewares/UsuarioMulter");
const UsuarioValidator = require("../middlewares/UsuarioValidator");

router.post("/login", controller.fazerLogin);
router.post("/criar-conta", controller.criarConta);
router.post("/adicionar-dados-pessoais", autorizacao, UsuarioValidator.step2, controller.addDadosPessoais);
router.put("/", autorizacao, upload.single("foto_usuario"), UsuarioValidator.update ,controller.atualizarDados);
router.get("/", autorizacao, controller.indexUsuario)
router.get("/enderecos", autorizacao, controller.indexEnderecoByUsuario)
router.get("/livros", autorizacao, controller.indexLivroByUsuario)
router.delete("/", autorizacao, controller.deletarConta);

module.exports = router;
