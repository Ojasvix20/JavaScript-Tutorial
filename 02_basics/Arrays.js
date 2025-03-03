// ARRAYS

const myArr = [69, 2, 45, 78, 6, 9, "Hello", ["a", "b", "c"]];

// console.log(myArr[0]);

const myArr2 = new Array(5, 2, 45, 9);
console.log(myArr2);
// console.log(myArr2.length);

// Array Methods

// myArr2.push(234); //push an element at the end of array
// myArr2.push(698); //push an element at the end of array
// console.log(myArr2);
// myArr2.pop(); //pop the element at the end of array
// console.log(myArr2);

// myArr2.unshift(99);     //push element at the start of array
// myArr2.unshift(55);     //push element at the start of array
// console.log(myArr2);

// myArr2.shift();     //pop/remove element at the start of array
// console.log(myArr2);

// console.log(myArr2.includes(9));
// console.log(myArr2.includes(85));

// console.log(myArr2.indexOf(9));
// console.log(myArr2.indexOf(85));

// const newArr= myArr2.join()
// console.log(newArr);        //returns array in the form of string
// console.log(typeof newArr);

const myxyz = myArr2.slice(1, 3);
console.log(myxyz);
console.log("original array: ", myArr2, "is not affected");

const my12 = myArr2.splice(1, 3);
console.log(my12);
console.log(myArr2);

// Slice vs Splice
// Slice- the slice function doesnt make any changes in the original araay, it make a different copy of the array and works on it.
// Splice- the splice functions actually changes the array and removes the elements whose index is passed in the arguement. It works on refrence of the array, thus changing its original array.