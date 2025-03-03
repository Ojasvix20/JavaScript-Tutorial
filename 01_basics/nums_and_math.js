const score = 400;
// console.log(score);

const balance = new Number(10000); //explicitly telling the datatype

// console.log(balance);

// console.log(balance.toString());
// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const otherNumber = 1123.8966;
// console.log(otherNumber.toPrecision(3));

const anotherNumber = 100000;
// console.log(anotherNumber.toLocaleString('en-IN'));

// *******************Maths******************************

// console.log(Math);
// console.log(Math.abs(-40));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.6));    //higher side round off
// console.log(Math.floor(4.9));   //lower side round off

// console.log(Math.sqrt(49));
// console.log(Math.min(4,5,7,3,2,1));
// console.log(Math.max(4,5,7,3,2,1));

console.log(Math.random()); //returns random no. between 0 & 1

console.log(Math.random() * 10 + 1); //minimum 1, max 9
console.log(Math.floor(Math.random() * 10 + 1)); //minimum 1, max 9

const min = 10;
const max = 20;
console.log(Math.floor(Math.random()*(max-min+1))+min);
