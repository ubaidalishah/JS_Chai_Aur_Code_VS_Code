// how memory works in js
// stack memory(primitive datatypes use stack memory),
//  heap memory(non primitive datatypes use heap)
let my_name="ubaid"
 let another_name=my_name 
 another_name='ali'
 console.log(another_name) // ali
 console.log(my_name) // ubaid 
 // in the above eg the value of the variable doesnot change as the 2nd variable get the copy not the reference of the first variable

 let user_one={
    name:'ubaid',
    age:22
 }
let user_two=user_one
user_two.name="ali"
console.log(user_one.name) // name = ali
console.log(user_two.name) // name = ali
// the values change in both because object is non primitive datatypes which works in heapmemory
