console.log(
  "Node js is not language its is run time environment\n that run js code using V8 Engine"
);

// console module is a debugging console
// === this is also check tyoe
// for (i = 1; i <= 10; i++) {
//   console.log(i * 2);
// }
// const a = [1, 2, 3, 4, 5, 6];
// a.map((i) => {
//   console.log(i);
// });

//module export
// var app = require("./Second");
// console.log(app.a);

const a = [1, 2, 3, 4, 5];
const ans = a.filter((i) => i % 2 == 0);
console.log(ans);
