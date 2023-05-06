const http = require("http");
const fs = require("fs");
const path = require("path");
http
  .createServer((req, res) => {
    if (req.url == "/") {
      res.write(`<html lang="en">
      <head>
         
          <title>Document</title>
      </head>
      <button>
         <form method="get" action="/send">
          <input type="text" name="name"/>
          <button type="submit" >Send</button>
         </form>
      </body>
      </html>`);
      res.end();
    }
    if (req.url == "/send") {
      const name = req.query.name;
      res.end(name);
    }
  })
  .listen(5001);
