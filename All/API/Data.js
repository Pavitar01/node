const fs = require("fs");
const http = require("http");
const { json } = require("../Json/Main");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.end("you are at home");
    } else if (req.url == "/api") {
      fs.readFile("userapi.json", "utf-8", (err, data) => {
        res.writeHead(200, { "content-type": "application/json" });
        // const string = JSON.parse(data);
        res.end("hello" + data);
      });
    }
  })
  .listen(6002);
