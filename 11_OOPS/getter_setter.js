class User {
  constructor(email, password) {
    this.email = email;
    this.password = password;
  }
  get password() {
    return this.password.toUpperCase();
  }
  set password(value) {
    this.password=value;
  }
}
const ramesh = new User("ramesh@google.com", "123");
console.log(ramesh.password);
