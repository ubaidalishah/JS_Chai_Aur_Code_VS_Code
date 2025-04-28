// for of 
const arr = [1,2,3,4,5]
for (const element of arr) {
    // console.log(element) 
}
// for (const i of arr){
//     console.log(i)
// }
// for (let i of arr){
//     console.log(i)
// }
let greetings = "hello world"
for (let greet of greetings){
    if(greet == " ")
        continue
    // console.log(greet)
}
// maps -- hold unique values
const map = new Map()
map.set('Pk', "Pakistan")
map.set('IN',"India")
for (const key of map){
    console.log(key) 
}
for (const [key, value] of map){
    console.log(key +':->'+ value)
}
//  for simple objects the above syntax and methods not work
// for in loop
const my_object = {
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby'
}
for (const key in my_object) {
  console.log(key,my_object[key])
}
let new_array = ['js','ruby','java','python']
for (const key in new_array) {
 console.log(key,new_array[key]) // key is the index of array
}

// for map for in loop does not work

// for each loop
const coding_array = ['c++','c','python','js']
coding_array.forEach( function (item){
 console.log(item + ": programming language")
} )
// using arrow function 
// coding_array.forEach((item)=>{
   
// })
// passing function
// function print_me(item){
// console.log(item)
// }
// coding_array.forEach(print_me)
// for each have access of the whole array , index and the items i mean the call back function in the foreach loop have access of all these
// coding_array.forEach((item,index,arr)=>{

// })
let objects_array =[
    {
    language : 'javascript',
    file_name:'js'
},
{
    language : 'java',
    file_name:'java'
},
{
    language : 'python',
    file_name:'py'
}
]
objects_array.forEach( (item) => {
 console.log(item.file_name)
} )