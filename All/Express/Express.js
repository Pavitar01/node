const app = require("express")();
const path = require("path");
app.get("/", (req, res) => {
  //req is represnt http request query,parameter, string, body
  // then respond
  //   path.join(__dirname, "/index.html")
  res.send("hello");
});
app.get("/about", (req, res) => {
  res.send("about");
});
app.get("/json", (req, res) => {
  res.json([
    {
      id: 1,
      name: "viney",
    },
    {
      id: 2,
      name: "pavi",
    },
  ]);
});

app.listen(3004, () => {
  console.log("server is running on 3004");
});
