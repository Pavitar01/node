const fs = require("fs");
//end ,destination
const rstream = fs.createReadStream("index.html");

const http = require("http");
http
  .createServer((req, res) => {
    rstream.pipe(res);
  })
  .listen(5002);
