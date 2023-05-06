const json = require("./Main");
const app = json.json;

const fs = require("fs");
// fs.writeFile("myjson.json", app, (err) => {
//   console.log("created");
// });
fs.readFile("myjson.json", "utf-8", (err, data) => {
  const newdata = data;
  const js = JSON.parse(newdata);
  console.log(js);
});
