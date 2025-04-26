const score= 100
let balance= new Number(60)
console.log(balance)
console.log(balance.toString().length)
console.log(balance.toFixed(2)) // 60.00
let other_number=23.6829
console.log(other_number.toPrecision(4)) // 23.68
const hundreds=100000000
console.log(hundreds.toLocaleString()) //100,000,000
console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// ******* Maths *********
console.log(Math.abs(-4))
console.log(Math.round(4.324)) // 4
console.log(Math.ceil(4.324)) // 5
console.log(Math.floor(4.324)) // 4
let array1= new Array(3,4,5,6,6,7,2)
console.log(Math.max(array1)) // NaN
// so math.max expect number input, directly passing array is not supported although we can use spread operator here to pass every number as an individual input

console.log(Math.max(...array1)) // 7
console.log(Math.floor((Math.random()*10)+1))
console.log(Math.max(10,2,4,11,24,4,2,1)) // 24



