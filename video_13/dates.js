let my_date = new Date()
console.log(my_date.toLocaleDateString()) // 4/23/2025
console.log(my_date.toString())
//Wed Apr 23 2025 20:27:50 GMT+0500 (Pakistan Standard Time)
console.log(typeof my_date) // object
let my_created_date = new Date(2024,0,23)
console.log(my_created_date.toDateString()) //Tue Jan 23 2024
let my_created_date1= new Date(2024,0,3,4,8)
console.log(my_created_date1.toString())
let my_created_date2= new Date("01-14-2024") // Wed Jan 03 2024 04:08:00 GMT+0500 (Pakistan Standard Time)
console.log(my_created_date2.toString()) //Sun Jan 14 2024 00:00:00 GMT+0500 (Pakistan Standard Time)
let my_time_stamp = Date.now()
console.log(my_time_stamp) // milliseconds from 1970 1745422564694
console.log(my_created_date.getTime()) // 1705950000000
console.log(Math.floor(Date.now()/1000))  // 1745422702 seconds
let new_date= new Date()
console.log(new_date.getMonth()+1) // 4 
console.log(new_date.toLocaleString('default',{
    weekday: "long",
    dayPeriod:"long"
})) // Wednesday, in the evening

