// ARRAYS

const myArr = [69, 2, 45, 78, 6, 9, "Hello", ["a", "b", "c"]];

console.log(myArr[0]);

const myArr2 = new Array(5, 2, 45, 9);
console.log(myArr2);
// console.log(myArr2.length);

// Array Methods

// myArr2.push(234); //push an element at the end of array
// myArr2.push(698); //push an element at the end of array
// console.log(myArr2);
// myArr2.pop(); //pop the element at the end of array
// console.log(myArr2);

myArr2.unshift(99);     //push element at the start of array
myArr2.unshift(55);     //push element at the start of array
console.log(myArr2);

myArr2.shift();     //pop/remove element at the start of array
console.log(myArr2);
