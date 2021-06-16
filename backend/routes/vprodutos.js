const path = require("path");
const viewProdutos = path.join(__dirname, "../views/produtos.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewProdutos);
});

module.exports = router;
