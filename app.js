const morgan = require("morgan");
const express = require("express");
// const layout = require("./views/layout");
const { Page, User, db } = require('./models');
const userRoutes = require("./routes/user");
const wikiRoutes = require("./routes/wiki");

const app = express();

app.use(express.static(__dirname + `/public`));
app.use(express.urlencoded({ extended: true }));
app.use('/user', userRoutes);
app.use('/wiki', wikiRoutes);

db.authenticate().
then(() => {
  console.log('connected to the database');
})


app.get("/", (req, res) => {
  res.redirect("/wiki");
})



const port = 3000;

const mainModels = async () => {

  await db.sync({force: true});
  await db.close();

  app.listen(port);
}

mainModels();
