class User {
  constructor(username) {
    this.username = username;
  }

  logMe() {
    console.log(`Username ${this.username}`);
  }

  static createId() {
    //static keyword prevents the access of a method to every instance
    return `123`;
  }
}

const Ramesh = new User("Ramesh");
// console.log(Ramesh.createId()); doesnt have access anymore bcz of static keyword

class Teacher extends User {
  constructor(username, email) {
    super(username);
    this.email = email;
  }
}

const Riya = new Teacher("Riya", "riya@gmail.com");
Riya.logMe();
