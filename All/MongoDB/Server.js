const app = require("express")();
const mongoose = require("mongoose"); //for using mongodb and mongo connection
const morgan = require("morgan"); //for handling api
const bodyParser = require("body-parser"); //for handling body request
mongoose.connect("mongodb+srv://pavi:pavi@cluster0.ghnljc9.mongodb.net/test");
const db = mongoose.connection;
db.on("error", (err) => {
  console.log(err);
});

db.once("open", () => {
  console.log("connection established");
});
app.use(morgan("dev"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(7001, () => {
  console.log("server is running");
});
