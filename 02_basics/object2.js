const tinderUser = new Object();

tinderUser.id = "123abc";
tinderUser.name = "Ramesh";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
  email: "User@gmail.com",
  fullName: {
    userFullName: {
      firstName: "Tunnu",
      lastName: "Lal",
    },
  },
};

// console.log(regularUser.fullName.userFullName);
// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "a", 2: "b", 3: "c" };
const obj2 = { 4: "d", 5: "e", 6: "f" };

// const obj3= {obj1,obj2}
// console.log(obj3);

//combine 2 or more objects correctly:

// const obj3 = Object.assign({},obj1,obj2);
// console.log(obj3);

// using spread operator:
const obj3 = { ...obj1, ...obj2 };
// console.log(obj3);

// to return only the keys of an object:

console.log(Object.keys(tinderUser));

// to return only the values of an object:
console.log(Object.values(tinderUser));

// to return the key-values pair of an object as array:
console.log(Object.entries(tinderUser));  //vaguely used.

// to check if a key exists
console.log(tinderUser.hasOwnProperty('email'));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
