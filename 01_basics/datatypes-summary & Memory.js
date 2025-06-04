// ******** Primitive  (call by value)  **********

// 7 types: String, number, boolean, null, undefined, symbol, BigInt

// ***JavaScript is a dynamically typed language, thus no need to tell type while making variable and the type of variable is decided during runtime

const score = 100;
const scoreValue = 100.3;

const isLoggedIn = false;
const outsideTemp = null;
let userEmail;

const id = Symbol("123");
const anotherId = Symbol("123");
console.log(id === anotherId);

const bigNumber = 1324679876546513298798465465465n;

//***********  Non Primitive (Refrence Type)  ***********

// Arrays, objects, functions.

const heros = ["Shaktiman", "Super Man", "BatMan"]; //array

// objects:
let myObj = {
  name: "Tunnu",
  age: 22,
};

// function:
const myfun = function () {
  console.log("hello World");
};

console.log(typeof myfun);
console.log(typeof outsideTemp);
console.log(typeof bigNumber);
console.log(typeof id);

// +++++++++++++++++++MEMORY+++++++++++++++++++++++

// Stack(Primitive) , Heap( Non- Primitive)

// primitive datatypes handle *copy* of data
/* name1="ramesh"; name2=name1; name2="Suresh"
in the above example, name1 will not be changed at all */

let myName = "Ray";
let Name2 = myName;
Name2 = "Tunnu";
console.log(myName);
console.log(Name2);

// Non primitive datatypes use *refrence*, i.e. name1 and name2 would point to the same item in memory and changing name2 will also change name1
/*Eg:*/
let userOne={
    email: "user@gmail.com",
    upi:"user@paytm"
}
let userTwo= userOne
userTwo.email="ramesh@gmail.com"
// the above change of email for userTwo will also change the value of email for userOne

console.log((userOne.email));
console.log((userTwo.email));
