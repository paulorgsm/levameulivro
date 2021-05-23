const express = require('express');
const router = express.Router();
const controller = require('../controllers/HomeController')

router.get('/home', controller.index);

module.exports = router;