const path = require("path");
const { disconnect } = require("process");
const app = require("express")();
const http = require("http").Server(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const io = require("socket.io")(http);
var user = 0;
io.on("connection", (socket) => {
  console.log("connected");
  user++;
  socket.broadcast.emit("userconnected", {
    description: user + " user connected",
  });

  socket.on(disconnect, () => {
    user--;
    socket.broadcast.emit("userconnected", {
      descrtion: user + "user disconnected",
    });
  });
});
http.listen(9001);
