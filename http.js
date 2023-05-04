const http = require("http"); //forhandling req and response
// http.createServer(()=>{}).listen(4001);
const app = http.createServer((req, res) => {
  res.write("hello");
  res.end();
});
app.listen(4001, () => {
  console.log("server is running");
});
