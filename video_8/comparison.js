
console.log(2 > 1)
console.log("2">1)
console.log("02">1)
console.log(null>=0) // true conversion is done of null
console.log(null > 0)
console.log(null == 0) // false conversion of null is not done
console.log(undefined >= 0) // false in every case
console.log(undefined != 0) // true

// ### using strict check ### 
 
console.log(null === 0) // false
console.log("2"===2) // false

