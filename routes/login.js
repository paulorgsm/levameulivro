const express = require('express');
const router = express.Router();
const controller = require('../controllers/LoginController')

router.get('/login', controller.index);

module.exports = router;