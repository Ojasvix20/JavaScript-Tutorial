//older mmethods
//getters and setters in functions

function User(email, password) {
  this._email = email;
  this._password = password;

  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this.email = value;
    },
  });
}

const chai = new User("chai@chai.com", "chai123");
console.log(chai.email);

