const express = require("express");
const router = express.Router();
const controller = require("../controllers/LivroController");
const upload = require("../middlewares/LivroMulter");

router.post("/", upload.array("photos", 5), controller.create);
router.get("", controller.indexByNameOrAutorOrTag);
router.get("/", controller.indexAll);
router.get("/:id", controller.indexById);

module.exports = router;
