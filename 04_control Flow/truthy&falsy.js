const userEmail = "r@ramesh.com";
if (userEmail) {
    console.log("Got user email");
} else {
    console.log('no user email');
}

//  FLASY VALUES
// false, 0, -0, BigInt 0n, null, undefined, NaN

// TRUTHY VALUES
// "0", "false", " ", [], {}, function(){}

// to check if empty array

const arr = []
if (arr.length === 0) {
    console.log("array is empty");
}

const emptyObj = {
    1: "hello"
}
if (Object.keys(emptyObj).length === 0) {
    console.log("object is empty");
} else {
    console.log("object is not empty");
}


// NULLISH Coalescing Operator (??) : null, undefined
let val1;
// val1= 5 ?? 10
// val1= null ?? 10
// val1= undefined ?? 15
val1 = null ?? 12 ?? 20  //first value will be used here (10)

console.log(val1);


// Terniary Operator:

// condition ? true : false

const iceTeaPrice =98
iceTeaPrice >=80 ? console.log("more than 80") : console.log("less  than 80");

