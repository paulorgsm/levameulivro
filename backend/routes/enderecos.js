const controller = require("../controllers/EnderecoController");
const autorizacao = require("../middlewares/Autorizacao");
const express = require("express");
const EnderecoValidator = require("../middlewares/EnderecoValidator");
const router = express.Router();

router.post("/", autorizacao, EnderecoValidator, controller.create);
router.put("/:id", autorizacao, controller.update);

module.exports = router;
