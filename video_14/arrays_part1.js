let my_array=[1,23,4,5,5]
let my_array_two = new Array('hello',2,4,'shah')
console.log(my_array[2])
console.log(my_array_two[1])

// array copies are shallow copies means a copy is taking values by reference
my_array.push(4)
console.log(my_array) // [ 1, 23, 4, 5, 5, 4 ]
my_array.pop()
console.log(my_array) // [ 1, 23, 4, 5, 5 ]
my_array.unshift('hi in the first')
console.log(my_array) // [ 'hi in the first', 1, 23, 4, 5, 5 ]
my_array.shift()
console.log(my_array) // [ 1, 23, 4, 5, 5 ]

console.log(my_array.includes(10)) // false
console.log(my_array.indexOf(10)) // -1
console.log(my_array.indexOf(4))  // 2
const new_array= my_array.join()
console.log(new_array)
console.log(my_array)

// slice and splice
let orginal_array=[0,1,2,3,4,5]
let slice_array = orginal_array.slice(1,4)


console.log(`Original Array:  ${orginal_array}`)
console.log(`Sliced_Array: ${slice_array} `)
// original array doesnot change and the limit is not included
console.log(`Original Array:  ${orginal_array}`)


let splice_array = orginal_array.splice(1,4)
console.log(`Spliced_Array: ${splice_array} `) // original array  change and also the the limit of the range is included
console.log(`Original Array:  ${orginal_array}`)




