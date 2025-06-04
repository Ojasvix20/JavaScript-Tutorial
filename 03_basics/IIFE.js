// Immediately Invoked Function Expressions (IIFE)

// function chai(){
//     console.log('DB CONNECTED');

// }
// chai();

//IIFE:

(function chai() {      //THIS IS A NAMED IIFE 
  console.log("DB CONNECTED in IIFE");
})(); //; is must else next IIFE fn wont work

//to remove pollution caused by global scope, iife is used

//IIFE arrow fn:
(() => {
  console.log("DB connected IIFE ARROW");
})(); //; is must else next fn wont work

//IIFE arrow fn with params and args:
((name) => {        //unamed iife
  console.log(`Name is: ${name}`);
})("Ramesh");
