const controller = require("../controllers/EnderecoController");
const autorizacao = require("../middlewares/Autorizacao");
const express = require("express");
const router = express.Router();

router.post("/", autorizacao, controller.create);
router.put("/:id", autorizacao, controller.update);

module.exports = router;
