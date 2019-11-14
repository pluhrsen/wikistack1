const express = require("express");
const router = express.Router();
const { Page } = require ("../models");
const { addPage, main } = require("../views");

router.get("/", (req, res) => {
  res.send(main());
})

router.post("/", async (req, res) => {

  const name = req.body.name;
  const email = req.body.email;
  const title = req.body.title;
  const content = req.body.content;
  const status = req.body.status;

  const page = new Page({
    title,
    content,
    status
  });

  try{
    await page.save();
    res.redirect('/');
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(addPage());
})

module.exports = router;
