//json is Js object notation
//jsonis lightweight
//format for storing data and transporting data
//data from server to webpage

// this object
const biodata = {
  name: "pavi",
  class: "first",
  age: 3,
};
// this is json
const jsondata = JSON.stringify(biodata);

// console.log(JSON.parse(jsondata));
module.exports = {
  json: jsondata,
};
