// cookie parser

//res.cookie('coookie name","cookie value",{
//     expire:360000+Date.now()
// })

//res.clearcookie("cookie name")

const bodyParser = require("body-parser");
const cookie = require("cookie-parser");
const app = require("express")();
app.use(cookie());
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res
    .cookie("cookie1", "hello pavi", { expire: Date.now() + 36000 })
    .send("cookies send");
});

app.get("/maxAge", (req, res) => {
  res.cookie("cookie1", "hello pavi", { maxAge: 36000 }).send("cookies send");
});

app.get("/showcookie", (req, res) => {
  res.send(req.cookies);
});

app.get("/delete", (req, res) => {
  res.clearCookie("cookie1").send("cookie has bee deleted");
});

app.listen(8001, () => {
  console.log("server is listening on port:8001");
});
