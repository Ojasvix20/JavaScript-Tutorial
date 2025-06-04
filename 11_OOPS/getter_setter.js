class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return `${this._password.toUpperCase()}-Ramesh`;
  }
  set password(value) {
    this._password = value;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
}
const ramesh = new User("ramesh@google.com", "abc");
console.log(ramesh.password);
