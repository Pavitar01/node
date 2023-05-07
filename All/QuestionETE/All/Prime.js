// isprime = false;
// const fun = (a) => {
//   for (let i = 2; i < a; i++) {
//     if (a % i === 0) {
//       return false;
//     }
//   }
//   return true;
// };

// const print = (a) => {
//   for (let i = 2; i <= a; i++) {
//     if (fun(i)) {
//       console.log(i);
//     }
//   }
// };
// print(5);

const fs = require("fs");

const app = require("express")();
app.get("/", (req, res) => {
  const rstream = fs.createReadStream("one.txt");
  const output = fs.createWriteStream("one.txt.gz");

  const zlib = require("zlib");
  const gzib = zlib.createGzip();
  rstream.pipe(gzib).pipe(output);

  rstream.on("data", (chunk) => {
    res.send(chunk);
  });

  rstream.on("end", (chunk) => {
    res.send(chunk);
  });

  rstream.on("error", () => {
    res.send("error");
  });
});

app.listen(9001);
