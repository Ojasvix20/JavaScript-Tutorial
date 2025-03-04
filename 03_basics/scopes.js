// {} => tells scope

let a = 20; //global scope

if (true) {
  let a = 900; //local scope within the if condition
  // console.log("Inside function: ", a);

  const b = 12;
  var c = 45;
}

// console.log("global", a);

// console.log(b); //will give error because b is defined within the if block and cannot be accessed from outside.

// console.log(c); //will print the actual value of c that was declared inside the if condition. this is a special and "bad" case of using "var".... hence we dont use var, instead use let & const (same case if we didnt use any of the options & typed "c=30")

function one() {
  const username = "Ramesh";
  function two() {
    const website = "youtube";
    // console.log(username);
  }
  // console.log(website);   //gives error bcz of scope
  two();
}

one();

if (true) {
  const username = "Ramesh"
  if (username === "Ramesh") {
    const website = "youtube";
    // console.log(username + website);   //runs ok
  }
  // console.log(website);   //error bcz of scope

}
// console.log(username);  //error bcz of scope

// ****************INTERESTING******************

console.log(addOne(39)); //being a function this will still work

function addOne(nums) {
  return nums + 1;
}

console.log(addOne(4))   //works 


addTwo(7);  //bcz of ariable declaration of fnction, error!!!

const addTwo = function (nums) {
  return nums + 2;
}

addTwo(7);  //works