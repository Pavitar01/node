var fs = require("fs");
var path = require("path");
const app = require("express")();
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
const arr = [];
app.get("/send", (req, res) => {
  const name = req.query.name;
  for (i = 0; i < name; i++) {
    arr.push(i);
  }
  const fs = require("fs");
  fs.writeFile("text.txt", arr.join(","), () => {
    console.log("done");
  });
  res.send("hello : " + name + arr);
});
app.listen(5001, () => {
  console.log("listening");
});
