const express = require('express');
const router = express.Router();
const controller = require('../controllers/CadastroController')

router.get('/cadastro', controller.index);

module.exports = router;