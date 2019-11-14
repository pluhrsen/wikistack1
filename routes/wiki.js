const express = require("express");
const router = express.Router();
const { Page, User } = require ("../models");
const { addPage, main, wikiPage } = require("../views");

router.get("/", async (req, res, next) => {
  try {
    const page = await Page.findAll()
    res.send(main(page));
  } catch(err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {

  const name = req.body.name;
  const email = req.body.email;
  const title = req.body.title;
  const content = req.body.content;
  const status = req.body.status;

  const user = await User.findOrCreate({where: { name, email }})

  const page = new Page({
    title,
    content,
    status
  });

  page.setAuthor(user[0])

  try{
    await page.save();
    await user[0].save();
    res.redirect(`/wiki/${page.slug}`);
  } catch (error) { next(error) }
});

router.get("/add", (req, res) => {
  res.send(addPage());
})

router.get('/:slug', async (req, res, next) => {
  try{
    const foundPage = await Page.findOne({
      where: {slug: req.params.slug}
    })
    const foundUser = await User.findOne({
      where: {id: foundPage.authorId}
    })
    res.send(wikiPage(foundPage, foundUser))
  } catch(err) {next(err)}
})

module.exports = router;
