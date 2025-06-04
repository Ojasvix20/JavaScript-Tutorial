// Arrow Function & This Keyword

const user = {
    username: "Ramesh",
    price: 999,

    welcomeMessage: function () {
        console.log(`${this.username}, welcome to website`);
        console.log(this);  //this refers to current context

    }
};

// user.welcomeMessage();
// user.username = "Tunnu"
// user.welcomeMessage();

console.log(this);      //returns blank object as theres no object

// function chai() {
//     let username = "Haigure";
//     console.log(this.username); //will return undefined as this keyword is used for objects not for functions
// }

// chai()

// ******another way of function declaration

// const chai = function name(params) {
//         let username = "Haigure";
//         console.log(this.username); 
// }
// chai() 

// ********declaring function with arrow:


const chai = () => {
    let username = "Bholu";
    console.log(username);
    console.log(this);
}

// chai()

// more abt arrow fn:

// const addTwo = (num1, num2) => { 
//     return num1 + num2;  //explicit return
// }

// console.log(addTwo(4,5))

// **implicit return

const addTwo = (num1, num2) => num1 + num2;
//very useful in react

// console.log(addTwo(4, 5))


//to return object in implicit return, arrow fn:

const printFn = () => ({username:"Dholu"});
//parantheses are must! for implicit return 

console.log(printFn())
