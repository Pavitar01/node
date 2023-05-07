const app = require("express")();
const http = require("http").Server(app);
const path = require("path");

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

//socket

var io = require("socket.io")(http);
//server side

var cnsp = io.of("/hello");

cnsp.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("disconnect", () => {
    console.log("user disconnected");
  });
});

http.listen(5002, () => {
  console.log("connected at 5002");
});
