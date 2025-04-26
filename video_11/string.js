const name="ubaid"
const repo_count=40
console.log(name + " "+ repo_count + " value")
console.log(`hello my name is ${name} and my repocount is ${repo_count}`)

const game_name=new String("Ubaid")
console.log(game_name)
console.log(game_name.length)
console.log(game_name[0])
console.log(game_name.__proto__)
console.log(game_name.toUpperCase()) // origonal is not changed but a copy
console.log(game_name.charAt(3)) // i
console.log(game_name.indexOf('i')) // 3
const new_string= "ubaid-ali-shah"
console.log(new_string.substring(0,5)) // ubaid
console.log(new_string.slice(3,5)) // id

const new_string2="    ubaid    ali   shah   "
console.log(new_string2)
console.log(new_string2.trim()) // only skip first and last spaces

console.log(new_string.replace('a','e'))// ubeid-ali-shah
console.log(new_string.includes("ali")) // true
console.log(new_string.split('-',2)) // ['ubaid','ali']
console.log(new_string.split('-')) // ['ubaid','ali','shah']




