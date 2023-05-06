const app = require("express")();
const path = require("path");
// const bodyparser = require("body-parser");
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/send", (req, res) => {
  // console.log(req.body.name);
  res.send(req.body.name);
});
app.listen(1001, () => {
  console.log("server is listening at 10001");
});
