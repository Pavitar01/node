// for files and directory
const path = require("path");

console.log(
  //full directory
  path.dirname(`C:/Users/Administrator/Desktop/Endterm/Node/All/Path`)
);
console.log(
  //name of extension
  path.extname(`C:/Users/Administrator/Desktop/Endterm/Node/All/Path.js`)
);
console.log(
  //name of file
  path.basename(`C:/Users/Administrator/Desktop/Endterm/Node/All/Path.js`)
);
console.log(
  //return an object
  path.parse(`C:/Users/Administrator/Desktop/Endterm/Node/All/Path.js`)
);
