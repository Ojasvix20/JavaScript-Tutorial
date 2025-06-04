// ES6

class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }

  encryptPassword() {
    return `${this.password}abc`;
  }
  capitalizeUsername() {
    return `${this.username.toUpperCase()}`;
  }
}

const user1 = new User("ray", "ray@gmail.com", "12345");
console.log(user1);
console.log(user1.encryptPassword());
console.log(user1.capitalizeUsername());

//behind the scene

function UserUser(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function () {
    return `${this.password}abc`;
};

User.prototype.capitalizeUsername = function () {
    return `${this.password.toUpperCase()}`;
};

const user2 = new User("ramesh", "ramesh@gmail.com", "7890");
console.log(user2);
console.log(user2.encryptPassword());
console.log(user2.capitalizeUsername());