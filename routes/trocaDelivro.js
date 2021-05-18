const express = require('express');
const router = express.Router();
const controller = require('../controllers/TrocaController')

router.get('/troca-de-livro', controller.index);

module.exports = router;