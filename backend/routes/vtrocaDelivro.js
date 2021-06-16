const path = require("path");
const viewTroca = path.join(__dirname, "../views/troca-de-livro.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewTroca);
});

module.exports = router;
