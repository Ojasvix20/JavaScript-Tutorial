// Dates

let myDate = new Date();
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

let myCustomDate = new Date(2023, 0, 23, 5, 3); //in js month start from 0-January
console.log(myCustomDate.toLocaleString());

let newDate = new Date("01-14-2025");
console.log(newDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp); //returns miliseconds passed from 1st Jan, 1970

console.log(newDate.getTime());

console.log(Math.floor(Date.now() / 1000)); // milisecond to seconds

let Date1 = new Date();
console.log(Date1);
console.log(Date1.getDate());
console.log(Date1.getMonth() + 1); // +1 bcz january is 0 in js. but we treate january as 1 in real life
console.log(Date1.getDay());

// SYNTAX TO PRINT FULL DATE IN A SENTENCE:

const options = {
  timeZone: "Asia/Kolkata",
  hour12: true,
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
};
const now = new Date();

console.log(
  `Today is ${now.toLocaleDateString('en-IN', { weekday: 'long' })} and the time is ${now.toLocaleTimeString(
    "en-IN",
    options
  )}`
);
