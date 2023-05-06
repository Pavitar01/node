const http = require("http");

//req is use to get the info of current http request
//eg url ,request header,and data
http
  .createServer((req, res) => {
    // res.write("hello");

    if (req.url == "/") {
      res.end("hello");
    } else {
      //now how to show content type
      res.writeHead(404, { "content-type": "text/html" });
      //   res.write("invalid Url");
      res.end("404, invalid Url");
    }
  })
  .listen(4006, "localhost", () => {
    console.log("server is running");
  });
