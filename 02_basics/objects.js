// singleton
//Object.create  (constructor method)

const mySym = Symbol("key1");

//object literals
const JsUser = {
  name: "Tunnu",
  age: 18,
  [mySym]: "myKey1",
  location: "Delhi",
  email: "tunnu@gmail.com",
  isLoggedIn: false,
  LastLoginDays: ["Monday", "Saturday"],
};

// methods to access elements of objects
console.log(JsUser.email);
console.log(JsUser["email"]);   //another way
console.log(JsUser[mySym]);     //for symbols we cant user object.key, we have to use object["key"]

// to change value:
JsUser.age = 20;
console.log(JsUser.age);

// to fix the values of the object so that noone can change it:
// Object.freeze(JsUser);
// JsUser.email = "hello@gmail.com";
// JsUser.age = 50;
// console.log(JsUser);

JsUser.greeting = function () {
  return (`Hello Js User, ${this.name}`);
};
//this keywords is used to refer to keys/values of the present object

console.log(JsUser.greeting());
