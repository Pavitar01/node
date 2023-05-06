// everything which is in between req and res

const express = require("express");
const app = express();

const filter = (req, res, next) => {
  if (!req.query.age) res.send("Pleasse provide Age");
  else if (req.query.age <= 18) {
    res.send("you are under age");
  } else {
    next();
  }
};
app.use(filter);

const path = require("path");
app.get("/home", (req, res) => {
  res.send("hello");
});
// const staticpath = path.join(__dirname, "../public");

// app.use(express.static(staticpath)); //it is used to call static website

app.get("", (req, res) => {
  // res.send("hello");
  res.sendFile(path.join(__dirname, "../index.html"));
});

app.listen(3005, () => {
  console.log("listening 3005");
});
