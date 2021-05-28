const express = require('express');
const router = express.Router();
const controller = require('../controllers/CadastroController')

router.post('/cadastro2', controller.criarConta);

module.exports = router;