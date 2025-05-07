// so what i want to ask you can you change tha value of math.pi
// no --- why?
// lets see it here
console.log(Object.getOwnPropertyDescriptor(Math, "PI"));
// {
//     value: 3.141592653589793,
//     writable: false,
//     enumerable: false,
//     configurable: false
//   }
//because the writable here is false and you can't change it
// what if we want to do the same for our own object created property
// let see
const user = {
  username: "UbaidAliShah",
  email: "ubaid@ubaid.com",
  age: 25,
};
console.log(Object.getOwnPropertyDescriptor(user, "email"));
// {
//     value: 'ubaid@ubaid.com',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }
Object.defineProperty(user, "email", {
  writable: false,
  enumerable: false,
  study: function () {},
});
console.log(Object.getOwnPropertyDescriptor(user, "email"));
// {
//     value: 'ubaid@ubaid.com',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }
for (const [key, value] of Object.entries(user)) {
  if (typeof value !== "function") {
    console.log(`${key} : ${value}`);
  }
}
// username : UbaidAliShah
// age : 25
// so email is not present because we disabled the enumeration on it
