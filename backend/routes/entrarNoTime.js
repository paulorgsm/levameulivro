const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoginController')

router.get('/entrar-no-time', controller.index);

module.exports = router;