const path = require("path");
const app = require("express")();
const http = require("http").Server(app);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

const io = require("socket.io")(http);
var user = 0;
io.on("connection", (socket) => {
  //   console.log(user + " user connected");
  user++;

  //sbko bhejna hai globally
  //   io.sockets.emit("broadcast", { description: user + " user connected" });

  //onoy fro new user
  io.emit("newuser", { description: "hello" });

  //jo pehel se connected hai unhe jayega
  socket.broadcast.emit("newuser", { description: user + " user connected" });

  socket.on("disconnect", () => {
    user--;
    // console.log(user + " disconnected");
    // io.sockets.emit("broadcast", { description: user + " user connected" });
    socket.broadcast.emit("newuser", {
      description: user + " user disconnected",
    });
  });
});
http.listen(3005, () => {
  console.log("server is listening");
});
