const express = require("express");
const router = express.Router();
const controller = require("../controllers/PerguntaController");

router.post("/", controller.create);
router.post("/2", controller.addResposta);
router.delete("/", controller.destroy);

module.exports = router;
