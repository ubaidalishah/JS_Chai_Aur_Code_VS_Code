function SetUserName(username) {
  this.username = username;
}
function CreateUser(username, email, password) {
  SetUserName.call(this, username); // providing the context to the setusername
  this.email = email;
  this.password = password;
}
const ubaid = new CreateUser("ubaid", "ubaid@ubaid.com", "123");
console.log(ubaid);

// method borrowing using call, and apply

let Employees = {
  username: "sarfaraza khan",
  email: "sarfo@sarfo.com",
};
function printMe(hometown, state) {
  console.log(
    `${this.username} is logged in from ${hometown} and from state ${state}`
  );
}
// call
printMe.call(Employees, "barikot", "swat");
let Workers = {
  username: "ubaidalishah",
  email: "ubaidalisha@ubaid.com",
};
// apply
printMe.apply(Workers, ["charsada", "peshawar"]);
// bind
let printMyName = printMe.bind(Employees, "barikot", "swat");
// it does not directly call the method but inject it in the reference object later we can call the method
printMyName();
