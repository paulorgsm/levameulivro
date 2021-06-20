const express = require("express");
const router = express.Router();
const controller = require("../controllers/LivroController");

// CRUD
router.post("/", controller.create);
router.get("/", controller.indexAll);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);

// CRUD DETALHADO
router.get("/:id", controller.indexById);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
