// lodash
// const _ = require("lodash"); // commonJS
import _ from "lodash"; // ES6

// Iterate on the array [1, 2, 'telerik aCademy', 'john', 'mAriA', 32, 'we ARE the CHAMPIONS']
// and get only the values which are strings and create a new array with the capitalized strings

// Example: we ARE the CHAMPIONS becomes We are the champions
// Use lodash functions. Everything you need is there!

const arr = [
  1,
  2,
  "telerik aCademy",
  "john",
  "mAriA",
  32,
  "we ARE the CHAMPIONS",
];

let arrOfStrings = [];

_.filter(arr, _.isString).map((str) => {
return arrOfStrings.push(_.capitalize(str))});

console.log(arrOfStrings);

