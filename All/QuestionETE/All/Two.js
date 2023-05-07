const app = require("express")();
const http = require("http").Server(app);

const mongoose = require("mongoose");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: true }));

mongoose
  .connect("mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/reg")
  .then(() => {
    console.log("connected");
  })
  .catch((err) => {
    console.log(err);
  });

const student = new mongoose.Schema({
  name: String,
  classes: String,
  reg: {
    required: true,
    type: Number,
  },
});

//model
const Data = new mongoose.model("Student", student);

app.get("/", (req, res) => {
  res.write(`
    <body>
   
<form method="post" action="/submit"> 
<input type="text" name="name" placeholder="name.."/>
<input type="text" name="class" placeholder="class.."/>
<input type="text" name="reg" placeholder="reg.."/>
<button type="submit">send</button>
</form>
    </body>
    `);
  res.end();
});

app.post("/submit", (req, res) => {
  const fname = req.body.name;
  const classe = req.body.class;
  const reg = req.body.reg;

  const s1 = new Data({
    name: fname,
    classes: classe,
    reg: reg,
  });

  const fun = async () => {
    const ss = await Data.insertMany([s1]);
    res.send("check DB");
  };
  fun();
});

http.listen(7001, () => [console.log("server is listening")]);
