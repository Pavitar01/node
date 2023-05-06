// Events is a builtin module: create,fire andlisten for your own events
//

const http = require("http");
const EventEmitter = require("events"); //first letter should be capital
const event = new EventEmitter();

// event.on("sayMyName", () => {
//   //define
//   console.log("hello");
// });
// event.on("sayMyName", () => {
//   //define
//   console.log("bie");
// });
// event.on("sayMyName", () => {
//   //define
//   console.log("see u");
// });

event.on("sayMyName", (statuscode, message) => {
  console.log("status code:" + statuscode + " and page is :" + message);
});
event.emit("sayMyName", 200, "ok");
// call;
