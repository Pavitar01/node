const fs = require("fs");
const path = require("path");
const app = require("express")();

app.get("/", (req, res) => {
  res.write(`
<body>
<form method="post" action="/done">
<input type="text" name="name"/>
<button type="submit">submit</button>
</form>

</body>`);
  //   req.end();
});

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));
app.post("/done", (req, res) => {
  const name = req.body.name;
  res.sendFile(path.join(__dirname, name));
  //   fs.readFile(name, "utf-8", (err, data) => {
  //     res.send(data);
  //   });
});
app.listen(6601);
