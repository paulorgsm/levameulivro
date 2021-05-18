const express = require('express');
const router = express.Router();
const controller = require('../controllers/ProdutosController')

router.get('/produtos', controller.index);

module.exports = router;