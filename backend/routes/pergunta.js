const express = require("express");
const router = express.Router();
const controller = require("../controllers/PerguntaController");

router.post("/", controller.create);
router.post("/2", controller.addResposta);
router.delete("/", controller.destroy);
router.get("/", controller.indexAll);
router.get("/:id", controller.indexById);
router.get("/:id/livros", controller.indexBookByQuestionId);
router.get("/:id/usuarios", controller.indexUserByQuestionId);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
