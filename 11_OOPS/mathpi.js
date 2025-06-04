const Descriptor = Object.getOwnPropertyDescriptor(Math, "PI");
console.log(Descriptor); //we see that properties are false.

// console.log(Math.PI);
Math.PI = 5; //cant overwrite value like this
// console.log(Math.PI);

const chai = {
  name: "Ginger Chai",
  price: 250,
  isAvailable: true,

  orderChai: function () {
    console.log("Chai nahi bani");
  },
};
console.log(chai);

// console.log(Object.getOwnPropertyDescriptor(chai)); undefined lol
console.log(Object.getOwnPropertyDescriptor(chai, "name"));

//now lets say we want to define/change the properties for chai:

// Object.defineProperty(chai, "name", {
//   writable: false,
//   enumerable: false,
// });

// console.log(Object.getOwnPropertyDescriptor(chai, "name"));

for (let [key, value] of Object.entries(chai)) {
  //cant directly write chai bcz its not iterable
  if (typeof value !== "function") {
    console.log(`${key}: ${value}`);
  }
}
