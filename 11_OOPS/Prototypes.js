let myName = "Ramesh      ";
console.log(myName.length);

console.log(myName.truelength);

let myHeroes = ["thor", "spiderman"];
let heroPower = {
  thor: "hammer",
  spiderman: "sling",

  getSpiderPower: function () {
    console.log(`Spidy power is${this.spiderman}`);
  },
};

Object.prototype.hitesh = function () {
  console.log(`hitesh is present in all objectss`);
}; //OBJECTS ARE HIGH ABOVE ALL FUNCTIONS,ARRAYS, STRINGS, ETC.

heroPower.hitesh();

myHeroes.hitesh();

// INHERITANCE

const User = {
  name: "chai",
  email: "chai@google.com",
};

const Teacher = {
  makeVideo: true,
};

const TeachingSupport = {
  isAvailable: false,
};

const TASupport = {
  makeAssignment: "JS Assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

Teacher.__proto__ = User;

//modern syntax

Object.setPrototypeOf(TeachingSupport, Teacher);

let anotherUsername = "ChaiAurCode    ";

String.prototype.truelength = function () {
  console.log(`${this} `);
  console.log(`${this.name} `);
  console.log(`True length is: ${this.trim().length} `);
};

anotherUsername.truelength()