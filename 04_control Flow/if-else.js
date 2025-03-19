// if else

// const score = 300;
// if(score>100){
//     let power= "fly"
//     console.log(`user power: ${power}`);
// }

//short hand notation:
 
const balance= 1000

// if(balance>230) console.log("test"); //can be used

// if(balance>230) console.log("test"),
// console.log("test-2");   //this is not used

// if(balance<500){
//     console.log("Insufficient balance");
    
// }else if(balance<750){
//     console.log("low balance, add money");
// }else{
//     console.log("enough balance : )");
    
// }

const userLoggedIn= true;
const debitCard= true ; 
const loggedInFromGoogle= false;
const loggedInFromEmail= true;

if(userLoggedIn && debitCard){
    console.log("Allow to buy course");
    
}
if (loggedInFromEmail || loggedInFromGoogle){
    console.log("User is logged in");
    
}
