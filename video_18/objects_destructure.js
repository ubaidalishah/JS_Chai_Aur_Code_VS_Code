let course = {
    course_instructor: "ubaid",
    course_name:"JavaScript",
    course_location: "Swat"
}
// De-Structuring The Object
let {course_instructor} = course
console.log(course_instructor) // ubaid
let {course_location: location} = course
console.log(location) // Swat

// API
// Valuse are coming in json format
// {
//     "name": "ubaid",
//     "coursename": "js"
//     "price": "free"
// } // json format
// sometimes the api give you the data in array structure
// [
//     {},
//     {},
//     {}
// ]

