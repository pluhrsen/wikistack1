const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send('this is a user page');
})

module.exports = router;
