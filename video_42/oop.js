//  there were no classes js
// the classes now which are there in js is syntactical sugar
// js is prototyped based language
// classes are syntactic sugar
// oop is programming paradigm means what is the type of your code structure
// object -> collection of properties and methods
// why use oop --> to avoid sphagetti programming
// parts of oop
// object literal
let user = {
  username: "ubaid",
  login_count: 8,
  signed_in: true,
  get_user_detail: function () {
    console.log(this.login_count);
  },
};
console.log(user.username);
user.get_user_detail();
// now if you want to make another copy of this object or instance then we use constructor function

// -constructor function // every time you use new a new instance is created , through new keyword a construction function is activated
function User(username, login_count, signed_in) {
  this.username = username;
  this.login_count = login_count;
  this.signed_in = signed_in;
  this.db_calls = function () {
    let db_user = this.username + "  have acces to db";
    return db_user;
  };
  //   return this;
}
let user_one = new User("ubaid", 9, true);
let user_two = new User("bacha", 10, false);
console.log(user_one);
// User { username: 'ubaid', login_count: 9, signed_in: true }
console.log(user_two.db_calls());
//User { username: 'bacha', login_count: 10, signed_in: false }
console.log(user_one instanceof User); // true

// -prototypes
// -classes
//  -instances(new,this)

//  ## 4 pillars
// abstraction
// encapsulation
// inheritance
// polymorphism
