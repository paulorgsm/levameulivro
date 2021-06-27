const express = require("express");
const router = express.Router();
const controller = require("../controllers/EnderecoController");

router.post("/", controller.create);
router.put("/:id", controller.update);
router.delete("/:id", controller.destroy);
router.get("/:id", controller.indexById);
router.get("/", controller.indexAll);
router.get("/:id/usuarios", controller.indexUserByAddressId);
router.get("/:id/:attribute", controller.indexByIdAndAttribute);

module.exports = router;
