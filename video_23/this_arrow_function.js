// ES 6 2015
// Arrow function 
// this keyword talk about the current context
user = {
    username : "Ubaid",
    price : 24,
    welcome_message : function(){
        console.log(`${this.username}, Welcome`)
    }
}
user.welcome_message()
user.username = 'Shah'
user.welcome_message()

// in node enviornment console.this is {} empty
// in browser the this refers to window object in global context

function one(){
    const user_name='hello'
    console.log(this.user_name) // undefine
      // console.log(this) // it gives you the global object of the node.js 
}
one()
console.log(this) // {}

let two = function (){
    let user_name='hi'
    console.log(this.user_name) // undefined
    // console.log(this) // it gives you the global object of the node.js 
}
two()
let three = () => {
    let user_name = 'Hallo'
    console.log(this.user_name) // undefined
    console.log(this) // {}
}
three()

// one thing i learned right now about the 'var' is that it is function scope not block scope so it leaks only from block like if else statement but if you used it inside fucntion then it behaves the same as let and const and does not leak.
let four = () => {
    var my_name = 'Ubaid ali shah'
}
// console.log(my_name) // it will give error 
if (true) {
    var my_last_name = "bacha"
}

console.log(my_last_name) // bacha

 // implicit return in arrow function 
 let adding_numbers = (num1,num2) => (num1 + num2)
 console.log(adding_numbers(2,2))
 let return_object = () => ({username:"ubaid bacha"})
 console.log(return_object())
