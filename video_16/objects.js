// objects created from constructor is always singleton
// Object.create
// other way of creating object is literals
let mysymb = Symbol("key1")
const user = {
    [mysymb]: 'key',
    "full name": 'ubaid ali shah',
    name:'ubaid',
    age: 24,
    location: 'swat',
    email: 'ubaid@google.com',
    is_logged_in: false,
    last_login_days: ['monday','saturday']
}
console.log(user.email)

console.log(user['email'])
// console.log(user.full name)// can't access this way

console.log(user['full name']) // right way to access

console.log(user.mysymb) // undefined
console.log(user[mysymb])  // right way to access the symbol value
console.log(user) //  [Symbol(key1)]: 'key'
user.name='bacha' // changing the values of user.name


// freezing the object

// Object.freeze(user)
// now the values can't be change
user.name='shah'
console.log(user.name) // bacha

user.greeting = function(){
    console.log("Hello Ubaid")
}
console.log(user.greeting) // getting the reference of the function and the function does not executed
console.log(user.greeting())
user.greeting_two = function (){
    console.log(`Hello ${this.name}`)

}
console.log(user.greeting_two())
 
