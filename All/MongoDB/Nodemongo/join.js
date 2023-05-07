const app = require("express")();

const mongoose = require("mongoose");
mongoose
  .connect("mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/test")
  .then(() => {
    console.log("connected to db");
  })
  .catch((err) => {
    console.log(err);
  });

//schema

const student = mongoose.Schema({
  name: String,
  age: Number,
  add: {
    type: String,
    default: "india",
  },
});
//class model

const Details = mongoose.model("Student", student);

// documents
const s1 = new Details({
  name: "pavi",
  age: 12,
  add: "ynr",
});
const s2 = new Details({
  name: "Kavi",
  age: 30,
});

app.get("/", (req, res) => {
  const fun = async () => {
    const ss = await Details.insertMany([s1, s2]);

    res.send(ss);
  };
  fun();
});

app.listen(8001);
