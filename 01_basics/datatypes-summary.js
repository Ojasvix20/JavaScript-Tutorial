// ******** Primitive  (call by value)  **********

// 7 types: String, number, boolean, null, undefined, symbol, BigInt

// ***JavaScript is a dynamically typed language, thus no need to tell type while making variable and the type of variable is decided during runtime

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id= Symbol('123')
const anotherId= Symbol('123')
console.log((id===anotherId));

const bigNumber= 1324679876546513298798465465465n



//***********  Non Primitive (Refrence Type)  ***********

// Arrays, objects, functions.

const heros= ["Shaktiman","Super Man", "BatMan"]        //array

// objects:
let myObj={
    name: "Tunnu",
    age: 22,
}

// function:
const myfun= function(){
    console.log("hello World");
}

console.log(typeof(myfun));
console.log(typeof(outsideTemp));
console.log(typeof(bigNumber));

