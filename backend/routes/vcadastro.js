const path = require("path");
const viewCadastro = path.join(__dirname, "../views/cadastro.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewCadastro);
});

module.exports = router;
