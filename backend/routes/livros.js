const express = require("express");
const router = express.Router();
const controller = require("../controllers/LivroController");
const autorizacao = require("../middlewares/Autorizacao");
const upload = require("../middlewares/LivroMulter");

router.post("/", autorizacao, upload.array("photos", 5), controller.create);
router.get("/", controller.indexAll);
router.get("/search", controller.indexByNameOrAutorOrTag);
router.get("/:id", controller.indexById);

module.exports = router;