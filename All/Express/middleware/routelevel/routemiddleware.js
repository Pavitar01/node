const app = require("express")();
const filtermiddle = require("./externalmiddle");
//noe its is for specific routes
app.get("/", (req, res) => {
  res.send("hello");
});
app.get("/home", filtermiddle.reqfilter, (req, res) => {
  res.send("home");
});

app.listen(3006);
