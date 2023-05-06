const fs = require("fs");

const app = require("express")();
const bodyparser = require("body-parser");

app.use(bodyparser.urlencoded({ extended: true }));
app.get("/", (req, res) => {
  res.write(`<body>
    <form method="post" action="/send">
    <input type="text" name="name" placeholder="name"/>
    <input type="text" name="reg"  placeholder="reg"/>
    <input type="text" name="grade"  placeholder="grade"/>
    <button type="submit">save</button>
    </form>
    </body>`);
});

app.post("/send", (req, res) => {
  const name = req.body.name;
  const reg = req.body.reg;
  const grade = req.body.grade;

  const details = `name is : ${name} and reg no is : ${reg} and grade is ${grade}`;
  fs.writeFile("pavi.txt", details, (err, data) => {
    console.log("done");
  });
});
app.listen(3007, () => {
  console.log("server");
});
