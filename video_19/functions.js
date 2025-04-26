const say_my_name = function () {
  console.log("Ubaid Ali Shah");
};
say_my_name();

function add_two_numbers(num1, num2) {
  if ((typeof num1 == "number") & (typeof num2 == "number")) {
    console.log(`The Addition of ${num1} and ${num2} is : ${num1 + num2}`);
  } else {
    console.log("not a number");
  }
}
add_two_numbers('a', 2);
const result_no_return_value = add_two_numbers(2,2)
console.log(result_no_return_value) // undefined as function does not return anything

function with_return_value (num1,num2){
  let result = num1 + num2
  return result
  // after return no statement will will run
}
let output = with_return_value(2,2)
console.log(`Function with return value ${output}`)

function log_in_user(username){
 return `${username} just logged in`
}
log_in_user('ubaid') // nothing will print as the function runs and return value but we are not stroing it or consoling it
console.log(log_in_user('ubaid'))
//ubaid just logged in
function log_in_user2(username){
 if (!username){
    return `Please enter a valid username`
 }
 return `${username} just logged in`
 
}
console.log(log_in_user2('hello'))

