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
const promise_three = new Promise( (resolve,reject) =>{
    setTimeout(function (){
    resolve({username:'ubaid',email:"ubaid@.com"})
    },1000)
}
 )
 promise_three.then(function(user){
console.log(user)
 })