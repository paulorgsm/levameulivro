const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");
const upload = require("../middlewares/UsuarioMulter");

router.post("/", controller.create);
router.post("/2", controller.addDadosPessoais);
router.put("/:id", upload.single("foto_usuario"), controller.update);
router.delete("/:id", controller.destroy);

module.exports = router;
