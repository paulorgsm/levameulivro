const path = require("path");
const viewLogin = path.join(__dirname, "../views/login.html");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(viewLogin);
});

module.exports = router;
