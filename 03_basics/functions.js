// function to add 2 nos.
// function addTwoNumbers(number1, number2){   //parameters
//     console.log("Sum is: ",number1+number2);
// }

// addTwoNumbers(3,4)  //arguments are passed here

function addTwoNumbers(number1, number2) {
  //parameters
  return number1 + number2;
}

const result = addTwoNumbers(3, 4);
// console.log("Result of addition: ",result);

function loginUserMessage(username) {
  // if(username===undefined){
  if (!username) {
    //better & more professional syntax
    console.log("please enter a username");
    return;
  }
  return `${username} just logged in.`;
}

// console.log(loginUserMessage());
// console.log(loginUserMessage("Ramesh"));

// function with default value:
function greeting(name = "Tunnu") {
  return `${name}, Hello Good Morning`;
}

console.log(greeting());        //will use the default value
console.log(greeting("Ramesh"));    //will use the argument value


