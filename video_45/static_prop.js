class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`Username : ${this.username}`);
  }
  static UniqueId() {
    return `unique_0`;
  }
}
let ubaid = new User("ubaid");
// console.log(ubaid.UniqueId()); // have no access to static methods
// inherit classes have also don't have acces to the static methods
ubaid.logMe();
class Techer extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  Classes(classes) {
    console.log(`${this.username} have ${classes} `);
  }
}
let bacha = new Techer("bacha", "bacha@bacha.com", "jhdsfkh");
bacha.Classes("math");
bacha.logMe();
