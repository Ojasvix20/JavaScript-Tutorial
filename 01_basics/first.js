// TUTORIAL - 01
console.log("Ramesh")
const accountId= 145656
let accountEmail = "ray@gmail.com"
var accountPwd= "123456"
accountCity= "Delhi"
// we can also create variable without any keyword, but it is not very ideal.

// accountId=200 not allow bcz accountId is a const and cant be changed

// var is vaguely used bcz of its problem with block and functional scope.
//  mainly const or let is used.

let accountState; //no value is given so value = undefined
// in Js semicolon is optional
console.log(accountId)
console.table({accountId,accountEmail,accountPwd,accountCity, accountState})
