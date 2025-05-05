class User {
  constructor(username) {
    this.username = username;
  }
  logMe() {
    console.log(`USERNAME : ${this.username}`);
  }
}
class Teacher extends User {
  constructor(username, email, password) {
    super(username);
    this.email = email;
    this.password = password;
  }
  addCourse() {
    console.log(`a new course is added by ${this.username}`);
  }
}
const ubaid = new Teacher("ubaid", "ubaid@.com", "1234");
ubaid.addCourse();
ubaid.logMe();
const bacha = new User("bacha");
// bacha.addCourse // have not access
bacha.logMe();
console.log(ubaid instanceof Teacher); // true
console.log(ubaid instanceof User); // true
console.log(Teacher instanceof User); // false
