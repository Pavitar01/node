const path = require("path");

const app = require("express")();
const http = require("http").Server(app);
app.get("/", (req, res) => {
  //   console.log();
  res.sendFile(path.join(__dirname, "/index.html"));
});

//events

// connect,disconnect,message,reconnect,ping,join,leave
var io = require("socket.io")(http);

// on events catch krne ke liye

io.on("connect", (socket) => {
  console.log("userconected");
  //   setTimeout(() => {

  //     //message send krne ke liye
  //     socket.emit("message", "messae from serveer side");
  //     //khudka event
  //   }, 3000);

  //emit is use to send custom event
  socket.on("fromclient", (data) => {
    console.log(data);
  });
});

//send custom events

http.listen(4000, () => {
  console.log("server is running");
});
