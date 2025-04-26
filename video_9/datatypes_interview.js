// datatypes are categorized on the basis of how we are accessing it like by reference or by values 
// primitive and non primitive(reference type) datatypes
// primitive 7 types:
//  String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference Type
// array, objects, functions

// js is dynamic language mean you don't have to tell the specific type of variable
// Example
let score= 100 // here you don't explicitly tell the score is number

const id= Symbol('123')
const another_id= Symbol('123')
console.log(id===another_id) // false

const big_number=123243534542589279572947932n //n in the last represent bigint
const heros=["ubaid","ali","shah"] //array
const obj_example={
    name: 'ubaid',
    age: 22,
    job: 'student'

}
let example_function=function(){ // datatype: object function
    console.log("Hello Function")
}
console.table([typeof example_function,typeof obj_example,typeof heros, typeof big_number,typeof id])





