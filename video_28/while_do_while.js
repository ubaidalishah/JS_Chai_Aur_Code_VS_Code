let i = 0
while( i <= 10){
    console.log(`the value of i is: ${i}`)
    i = i + 2
}
// while in array
let my_array = ['ubaid','flash','hello','hi']
let index = 0
while (index < my_array.length){
    console.log(`the value on the index ${index} is: ${my_array[index]}`)
    index = index + 1
}
//  do while loop
let score = 1
do {
    console.log(score)
    score++
} while (score <= 10);

let score1 = 11
do {
    console.log(score1) // 11-- do while runs atleast once without checking the condition 
    score1++
} while (score1 <= 10);

