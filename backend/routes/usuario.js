const express = require("express");
const router = express.Router();
const controller = require("../controllers/UsuarioController");

// CRUD
router.post("/1", controller.create);
router.post("/2", controller.addDadosPessoais);
router.get("/", controller.indexAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

// CRUD DETALHADO
router.get("/:id", controller.indexById);

module.exports = router;
