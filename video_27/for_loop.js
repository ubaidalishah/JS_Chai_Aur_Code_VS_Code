for (let index = 1; index < 11; index++) {
    const element = index;
    // console.log(element)
    
}
// printing tabeles 1 - 5
for (let i = 1; i < 6; i++) {
    const element = i;
    // console.log(`Table of ${i}`)
    for (let j = 1; j < 11; j++) {
        const element = j;
        // console.log(`${i} *  ${j} = ${i*j}`)
        
    }
}
// for loop in array
let my_array = ['ubaid', 'bacha', 'sherry', 'bhao']
for (let index = 0; index < my_array.length; index++) {
    const element = my_array[index];
    console.log(element)
    
}
// break and continue
for (let i = 0; i < 10; i++) {
    const element = i;
    
    if(element===5){
        console.log("5 detected")
        break
    }
    console.log(element)
}
for (let i = 1; i < 11; i++){
    let element = i
    if(element===5){
        console.log("5 Detected again")
        continue
    }
    console.log(element)
}
