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
