//anything done inreal time
//Readable,Writable,Duplex,transform

// data can be in chunk by chunk
// all are eventemitter instance=>data(when data is there to read),end(when done),error)when there is erro),finish(WHen no data is left)
const http = require("http");
const fs = require("fs");
http
  .createServer((req, res) => {
    const rstream = fs.createReadStream("text.txt");
    rstream.on("data", (chunk) => {
      res.write(chunk);
    });
    rstream.on("end", () => {
      res.end();
    });
    rstream.on("error", (err) => {
      console.log(err);
      res.end("error");
    });
  })
  .listen(4005, () => {
    console.log("server is listening on port :4005");
  });
