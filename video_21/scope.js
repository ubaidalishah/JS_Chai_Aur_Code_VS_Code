
if (true) {
    let a = 20
    const b = 30
    var c = 40
}
// console.log(a) // scope is block scope 
// console.log(b) // don't execute as the scope of the const is block scope
console.log(c) // only this run, the scope is not block scope
let a = 300
if (true) {
    let a = 10
    console.log("Inner a : ", a)
}
console.log("outer a", a)