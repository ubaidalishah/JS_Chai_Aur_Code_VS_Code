const promise_one = new Promise((resolve, reject) => {
  //do an async task
  //db calls, cryptography, network calls
  setTimeout(function () {
    console.log("asyn task is complete");
    resolve();
  }, 1000);
});
promise_one.then(function () {
  console.log("Promise Consumed");
}); // .then have direct relation with resolve

new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("Async Task Two Completed");
    resolve();
  }, 1000);
}).then(function () {
  console.log("Promised Two Resolved");
});
const promise_three = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve({ username: "ubaid", email: "ubaid@.com" });
  }, 1000);
});
promise_three.then(function (user) {
  console.log(user);
});
let promise_four = new Promise(function (resolve, reject) {
  setInterval(function () {
    let error = false;
    if (!error) {
      resolve({ username: "ubaid", password: "12234" });
    } else {
      reject("Error: Something Went Wrong");
    }
  }, 1000);
});
promise_four
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(function () {
    console.log("The Promise is either resolved or rejected");
  });
const promise_five = new Promise(function (resolve, reject) {
  setTimeout(function () {
    let error = true;
    if (!error) {
      resolve({ username: "bacha", password: "hello" });
    } else {
      reject("Error: JS went wrong");
    }
  }, 1000);
});
async function consumed_promise_five() {
  try {
    const response = await promise_five;
    console.log(response);
  } catch (error) {
    console.log(error);
  }
}
const request_url = "https://api.github.com/users/ubaidalishah";
consumed_promise_five();
// async function get_github_user() {
//   try {
//     const response = await fetch(request_url);
//     let data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log(error);
//   }
// }
// get_github_user();
fetch(request_url)
  .then(function (response) {
    return response.json();
  })
  .then((json_response) => {
    console.log(json_response);
  })
  .catch(function (error) {
    console.log(error);
  });
