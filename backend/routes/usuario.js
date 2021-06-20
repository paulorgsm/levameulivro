const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");

router.get("/", controller.indexAll);
router.get("/:id", controller.indexById);
router.post("/1", controller.create);
router.post("/2", controller.addDadosPessoais);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
