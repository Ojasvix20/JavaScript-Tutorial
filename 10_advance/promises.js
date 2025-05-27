const { response } = require("express");

const promise1 = new Promise(function (resolve, reject) {
  //things that can be done using promises:
  //Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    console.log("Async task is complete");
    resolve();
  }, 1000);
});

promise1.then(function () {
  console.log("promise consumed.");
});

new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Async 2 resolved");
});

const promise3 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    resolve({ username: "Ramesh", email: "ramesh07@gmail.com" });
  }, 1000);
});
promise3.then(function (user) {
  console.log(user);
});

const promise4 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "Ramesh", password: "12345" });
    } else {
      reject("ERROR: Something went wrong");
    }
  }, 1000);
});

promise4
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch(function (error) {
    //to deal if error occurs
    console.log(error);
  })
  .finally(() => {
    console.log("Finally the promise is either resolved or rejected");
  });

const promise5 = new Promise(function (resolve, reject) {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "JavaScript", password: "12345" });
    } else {
      reject("ERROR: JS went wrong");
    }
  }, 1000);
});

//promise can be done using async await as well

async function consumePromise5() {
  try {
    const response = await promise5;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
//either can be used (try catch or .then & .catch)
consumePromise5();

// async function getAllUsers() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/users')
//     const data = await response;
//     console.log(data);

//   } catch (error) {
//     console.log("E:", error);

//   }
// }
// getAllUsers()

// using the above same now in .then .catch

fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.log(error));

  //must be noted that this promise of fetch will execute first and the above code will be in terminal later
