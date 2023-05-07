// const fs = require("fs");
// const app = require("express")();

// app.get("/", (req, res) => {
//   fs.writeFile("one.txt", "hello how r you", () => {
//     res.write(`
//     <body>
//     <button ><a href="/send">Send</a></button>
//     </body>
//     `);
//     res.end();
//   });

//   app.get("/send", (req, res) => {
//     fs.readFile("one.txt", "utf-8", (err, data) => {
//       if (!err) {
//         res.send(data);
//       } else {
//         res.send("error");
//       }
//     });
//   });
// });
// app.listen(9001);
