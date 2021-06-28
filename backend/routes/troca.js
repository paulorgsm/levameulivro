const express = require("express");
const router = express.Router();
const controller = require("../controllers/TrocaController");

router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
router.get("/", controller.indexAll);
router.get("/:id", controller.indexById);
router.get("/:id/livros", controller.indexBookBySwapId);
router.get("/:id/usuarios", controller.indexUserBySwapId);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
