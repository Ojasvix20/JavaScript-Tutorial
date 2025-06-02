function SetUsername(username) {
  //suppose complex DB calls
  this.username = username;
  console.log("called");
}

function createUser(username, email, password) {
  //   SetUsername(username); we are trying to use fn instead of this.username=username, correct way:
  SetUsername.call(this, username);
  this.email = email;
  this.password = password;
}

const chai = new createUser("chai", "chai@fb.com", "123");
console.log(chai);
