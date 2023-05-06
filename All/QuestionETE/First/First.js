const app = require("express")();
const path = require("path");
app.get("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.listen(8801, () => {
  console.log("server is listeing at 8801");
});
