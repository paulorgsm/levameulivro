const express = require('express');
const router = express.Router();
const controller = require('../controllers/CadastroController')


router.post('/cadastro3', controller.adicionarEndereco);

module.exports = router;