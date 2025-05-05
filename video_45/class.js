// after ES6
class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  encrypt_pass() {
    return `${this.password}abc`;
  }
}
const ubaid = new User("ubaid", "ubaid@.com", "1234");
// console.log(ubaid.encrypt_pass());
console.log(ubaid);
//behind the scene

function User1(username, email, password) {
  this.username = username;
  this.email = email;
  this.password = password;
}
User1.prototype.encrypt_pass1 = function () {
  return `${this.password}hello`;
};
const bacha = new User1("bacha", "bacha@.com", "123245");
// console.log(bacha.encrypt_pass1());
console.log(bacha);
