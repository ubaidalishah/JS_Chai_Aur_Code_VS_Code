const marvel_heros = ['thor', 'ironman','spiderman']
const dc = ['superman', 'flash', 'batman']
// marvel_heros.push(dc) 
console.log(marvel_heros)
// [ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3])
// [ 'superman', 'flash', 'batman' ]
let new_heros = marvel_heros.concat(dc)
console.log(new_heros)
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const all_new_heros= [...marvel_heros, ...dc]
console.log(all_new_heros)
// [ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

const complex_array = [1,2,3,[4,5,6],7,[4,5,[6,7]]]
const complex_array_resolve = complex_array.flat(Infinity)
console.log(complex_array_resolve)
// [
  1, 2, 3, 4, 5,
  6, 7, 4, 5, 6,
  7
//]
console.log(Array.isArray("ubaid")) // false
console.log(Array.from("ubaid")) // [ 'u', 'b', 'a', 'i', 'd' ]
console.log(Array.from({name:'ubaid'})) // []
let score1=100
let score2=200
let score3= 300
console.log(Array.of(score1,score2,score3)) // [ 100, 200, 300 ]
