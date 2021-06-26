const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");
const upload = require("../middlewares/UsuarioMulter");

router.post("/", controller.create);
router.post("/2", controller.addDadosPessoais);
router.put("/:id", upload.single("foto_usuario"), controller.update);
router.delete("/:id", controller.destroy);
router.get("/", controller.indexAll);
router.get("/:id", controller.indexById);
router.get("/:id/livros", controller.indexBookByUserId);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
