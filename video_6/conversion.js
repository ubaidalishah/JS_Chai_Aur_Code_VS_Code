let score = 33
console.log(typeof(score)) // the output is number

let value_in_number= Number(score)
console.log(typeof(value_in_number))
console.log(value_in_number)


let string1="33abc"
let value_of_string= Number(string1)
console.log(typeof(value_of_string))// result ==> number
console.log(value_of_string)// result ==> NaN, tried to convert but failed

let score1= null
let score1_in_number= Number(null) // converted to number and the value is 0
console.log(score1_in_number) // result ==> 0

// true conversion to Number ==> 1
// fale ==> 0

// undefined to Number ==> NaN

let is_logged_in=1
let boolean_is_logged_in= Boolean(is_logged_in)
console.log(typeof(boolean_is_logged_in)) // result ==> true
console.log(boolean_is_logged_in) // result ==> true


// ### Conversion to Boolean ###
//1 ==> ture, 0==> false
// empty string==> false, string ==> true


let some_number= 66
let string_number= String(some_number)
console.log(typeof(string_number)) // output ==> string
console.log(string_number) // output ==> 66
