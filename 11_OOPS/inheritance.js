class User {
  constructor(username) {
    this.username = username;
  }
  logme() {
    console.log(`USERNAME is ${this.username}`);
  }
}

class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }

  addCourse() {
    console.log(`A new course was added by ${this.username}`);
  }
}

const Teacher1 = new Teacher("chai", "chai@gmail.com", "1234");
Teacher1.addCourse();
Teacher1.logme();

const Teacher2 = new User("Ray");
// Teacher2.addCourse() doesnt have access

Teacher2.logme();

//to check if something is an instance of some class:

console.log(Teacher1 instanceof Teacher);
console.log(Teacher1 instanceof User);
console.log(Teacher2 instanceof Teacher);
console.log(Teacher2 instanceof User);

