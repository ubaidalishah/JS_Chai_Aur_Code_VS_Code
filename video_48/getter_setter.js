class User {
  constructor(username, email, password) {
    this.username = username;
    this.email = email;
    this.password = password;
  }
  get email() {
    return this._email.toUpperCase();
  }
  set email(value) {
    this._email = value;
  }
  get password() {
    return `${this._password}encrypted`;
  }
  set password(value) {
    this._password = value;
  }
}
let user_one = new User("ubaid", "ubaid@ubaid.com", "kdjgi245");
console.log(user_one);
// User {
//     username: 'ubaid',
//     _email: 'ubaid@ubaid.com',
//     _password: 'kdjgi245'
//   }
console.log(user_one.email);
//UBAID@UBAID.COM

/// using prototypal approach --defineproperty base
function User1(username, email, password) {
  this._username = username;
  this._email = email;
  this._password = password;
  Object.defineProperty(this, "email", {
    get: function () {
      return this._email.toUpperCase();
    },
    set: function (value) {
      this._email = value;
    },
  });
}
let bacha = new User1("bacha", "bacha@bacha.com", "thisismypass");
console.log(bacha.email); // BACHA@BACHA.COM

// using object base approach
const User2 = {
  _email: "hello@hello.com",
  _password: "hagh2",
  get email() {
    return this._email.toUpperCase();
  },
  set email(value) {
    this._email = value;
  },
};
let user_object = Object.create(User2);
console.log(user_object.email); // HELLO@HELLO.COM
