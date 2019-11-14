const express = require("express");
const router = express.Router();
const { userList, userPages } = require("../views");
const { Page, User } = require ("../models");

router.get("/", async (req, res) => {
  const userArr = await User.findAll()
  res.send(userList(userArr));
})

router.get("/:id", async (req, res, next) => {
  try{
  const foundUser = await User.findOne({
    where: {id: req.params.id}
  })
  const foundPages = await Page.findAll({
    where: { authorId: foundUser.id}
  })
  res.send(userPages(foundUser, foundPages));
} catch (err) {
  next(err)
}
})

module.exports = router;
