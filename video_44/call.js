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
