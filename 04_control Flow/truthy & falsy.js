const userEmail = "h@ramesh.com"

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("no user email");
}

// FALSY VALUES
// false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// TRUTHY VALUES
// "0", "false", "  ", [], {}, function(){}

// to check if an array is empty

const arr= [];
if (arr.length===0) {
    console.log("Array is empty");
    
}