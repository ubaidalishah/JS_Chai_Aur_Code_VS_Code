function one(){
    const username = 'ubaid'
    function two(){
        const website = 'youtube'
        console.log(username)
    }
    // console.log(website) // can't access because of the scope
    two()
}
one()

// so the child function can access the parents variables and parent can't access the child variables
if (true){
    const username = 'ubaid'
    if(username){
        const website = 'hello'
        console.log(username+website)
    }
    // console.log(website)  will not execute
}
// console.log(username) will not execute

console.log(add_one(2)) // can be called before declaration of the function 
function add_one(num){
    return num + 1
}
let add_two = function (num){
    return num + 2
}

console.log(add_two(3)) // cannot be called before the declaration of the function