const fs = require("fs");

fs.readFile("json1.json", "utf-8", (err, data) => {
  const newdata = JSON.parse(data);

  console.log(newdata);
});
// const newjson = JSON.stringify(a);

// console.log(newjson);
