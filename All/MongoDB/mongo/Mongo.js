const mongoose = require("mongoose");

mongoose
  .connect("mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/newDB")
  .then(() => {
    console.log("connect to mongo");
  })
  .catch((err) => {
    console.log("error connect to mongo");
  });

//schema
const student = mongoose.Schema({
  name: String,
  age: Number,
  email: String,
  address: String,
});

//collection
const Details = mongoose.model("Student", student);

//

const s1 = new Details({
  name: "Kvi",
  age: 10,
  email: "tugrp@example.com",
  address: "mumbai",
});
const s2 = new Details({
  name: "Mavi",
  age: 12,
  email: "tugrp@example.com",
  address: "mumbai",
});

// const fun = async () => {
//   const sss = await Details.insertMany([s1, s2]);
//   console.log(sss);
// };

//lt,gt,ne,lte,gte,ni
// const fun = async () => {
//   const sss = await Details.find({ age: { $ne: 12 } });
//   console.log(sss);
// };

//$and ,$or
const fun = async () => {
  //   const sss = await Details.find({$and:[{first value},{second value}]});
  const sss = await Details.find({
    $and: [{ age: { $gt: 10 } }, { age: { $lt: 30 } }],
  });
  console.log(sss);
};

// const fun = async () => {
//   const update = await Details.updateOne(
//     { name: "Savi" },
//     { $set: { name: "Saru" } }
//   );
//    console.log(update);
// };
// fun();

// const fun = async () => {
//   const deldata = await Details.deleteOne({ name: "pavi" });
//   console.log(deldata);
// };
fun();
