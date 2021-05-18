const express = require('express');
const router = express.Router();
const controller = require('../controllers/BuscaController')

router.get('/busca', controller.index);

module.exports = router;