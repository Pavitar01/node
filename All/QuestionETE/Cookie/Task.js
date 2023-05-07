const app = require("express")();
const cookieparser = require("cookie-parser");
app.use(cookieparser());

app.get("/", (req, res) => {
  res.write(`
  <body>
  <form method="post" >
  <button ><a href="/cookiesaved">add cookie</a></button>
  <button ><a href="/cookieremoved">reset cookie</a></button>
  <button ><a href="/showcookie">show cookie</a></button>

  </form>
  </body>`);
  res.end();
});

app.get("/cookiesaved", (req, res) => {
  res.cookie("cookie1", "hello").send("cookie is saved");
});

app.get("/cookieremoved", (req, res) => {
  res.clearCookie("cookie1").send("clear");
});

app.get("/showcookie", (req, res) => {
  res.send(req.cookies);
});
app.listen(7001, () => {
  console.log("hello");
});
