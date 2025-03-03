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

console.log(greeting()); //will use the default value
console.log(greeting("Ramesh")); //will use the argument value

//using rest operator
//rest operator looks same as spread operator.
function calculateCartPrice(...num1) {
  return num1;
}
console.log(calculateCartPrice(200, 300, 400, 300));

// function w objects

const user = {
  username: "Hitesh",
  price: 99,
};
function handleObjects(anyObject) {
  console.log(
    `Username is ${anyObject.username} and price is ${anyObject.price}`
  );
}

handleObjects(user);
// we can also pass argument object directly
handleObjects({
  username: "Ray",
  price: 699,
});

// passing array as argument

const myArr = [200, 300, 400, 800];

function secondArrValue(getArray) {
  return getArray[1];
}

console.log(secondArrValue(myArr));
// we can also pass array directly
console.log(secondArrValue([100,90,80,40]));

