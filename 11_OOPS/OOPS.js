// Object Literal

const user = {
    username: "Ramesh",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log("Got user details from database");
        // console.log(`Username: ${username}`); without this keyword it will say username not defined as it doesnt know which usernname to refer.
        // using this keywords, it knows it has to access username from outside (current context)
        // console.log(this);

        console.log(`Username: ${this.username}`);
    },
};
//the above is an object literal
// console.log(user.username);
console.log(user.getUserDetails());

//at global context, this returns {}
// console.log(this);

//NOTE: lets say we have to create a user2 object now, so we'd have to copy paste and write all details again, however for this we use contructor functions to create new objects


// CONSTRUCTOR FUNCTION
// eg:
// const promise1 = new Promise(); here new keyword is a constructor function, it allows us to create multiple instances from just 1 object literal.


function User(username, loginCount, isloggedIn) {
    this.username = username;
    this.loginCount = loginCount;
    this.isloggedIn = isloggedIn;

    this.greeting = function(){
        return(`Welcome ${this.username}`);
        
    }

    return this;    //not necessary
}

const user1 = new User("Ramesh", 5, true);  //creates a new instance of User
const user2 = new User("Jignesh", 11, false);  //creates a new instance of User
console.log(user1);
console.log(user2);
console.log(user2.greeting());

