// REFER:
// https://momentjs.com/docs/

let myDate = new Date();
console.log(myDate);
let moment = require("moment");
let myCoolDate = moment(myDate).format("LL");
console.log(myCoolDate);

let unique = require("uniq");
let data = [1, 2, 3, 4, 2, 5, 5, 5, 5, 6];
console.log(unique(data));
