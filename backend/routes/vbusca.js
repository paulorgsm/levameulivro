const path = require("path");
const viewBusca = path.join(__dirname, "../views/busca.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewBusca);
});

module.exports = router;
