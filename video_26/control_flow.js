// if-else statement
if (true) {
  // code written here will execute as the condition is true
}
if (false) {
  // code written here will not execute as the condition is false
}
// conditional operators
// < , > , >=, <=, ==, ===(strict--also check the type) ,!=, !== (strict)
let temperature = 30;
if (temperature < 40) {
  console.log("Temperature less than 40");
} else {
  console.log("Temperature is Greater Than 40");
}

// short hand notation implicit scope
if (temperature > 20) console.log("Greater than 20");

// nesting -- checking multiple conditions
let my_acc_balance = 1000;
if (my_acc_balance < 500) {
  console.log("Less than 500");
} else if (my_acc_balance < 750) {
  console.log("Less than 750");
} else {
  console.log("Less than 1100");
}

// **********switch statement***********
const prompt = require('prompt-sync')();
let month = Number(prompt("Enter the number of the month:  "));
switch (month) {
  case 1:
    console.log("Jan");
    break;
  case 2:
    console.log("Feb");
    break;
  case 3:
    console.log("March");
    break;
  case 4:
    console.log("Apr");
    break;
  case 5:
    console.log("May");
    break;
  case 6:
    console.log("Jun");
    break;
  case 7:
    console.log("Jul");
    break;
  case 8:
    console.log("Aug");
    break;
  case 9:
    console.log("Sep");
    break;
  case 10:
    console.log("Oct");
    break;
  case 11:
    console.log("Nov");
    break;
  case 12:
    console.log("Dec");
    break;
  default:
    console.log("Invalid Number of Month Please Select Between 1-12")
    break;
}
// switch(month){
//     case 1:
//         console.log("")
//         break;
//     case 2:
//         console.log("")
//         break;
//     case 3:
//         console.log("")
//         break;
//     default:
//         console.log("")
//         break;
// }

// ****************Fasly Values***********************
// false, 0, -0, "", bigint---> (0n),null, undefined, NaN
// #############Surprising Truthy Values##########
// "0", " ", 'false',[],{},function(){},
//zero in string, space in string , false in string, empty array, empty object, empty function

// checking array emptiness
let empty_array = []
if(empty_array.length===0){
    console.log("array is empty")
}
// checking object emptiness
let empty_object = {}
if(Object.keys(empty_object).length===0){
    console.log("object is empty")
}

// Logical Operators
// && , ||

// *************Nullish Coalecing Operator************
data_base_value = null ?? 10 // 10
data_base_value2 = undefined ?? 15 // 15
data_base_value3 = 10 ?? 14 //10
data_base_value4 = 15 ?? 13 //15
data_base_value5 = null ?? function(num1,num2){
    return num1+num2
}
console.log(data_base_value5(data_base_value3,data_base_value4)) //25


// #######################Ternary Operator##############
let score = 100
score > 90 ? console.log("score is greater than 90"):console.log("score is less than 90")