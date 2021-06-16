const path = require("path");
const viewHome = path.join(__dirname, "../views/home.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewHome);
});

module.exports = router;
