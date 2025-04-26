const fb_user = new Object()
fb_user.id = '777a'
fb_user.name = 'ubaid'
fb_user.is_logged_in = false
console.log(fb_user)

let regular_user = {
    email: 'ubaid@fb.com',
    name: {
        full_name:{
            'first name':'ubaid',
            last_name:'shah'
        }
    }
}

console.log(regular_user.name.full_name['first name'])


//combining objects
const obj1= {
    1:'a',
    2:'b'
}
const obj2= {
    3: 'c',
    4: 'd'
}
// const obj3 = Object.assign({}, obj1, obj2) // first-- target, other-- resource
const obj3= {...obj1,...obj2} // using spread operator
console.log(obj3)
const users = [
    {
        user_name: 'ubaid',
        age: 22
    },
    {
        user_name: 'bacha',
        age: 23
    },
    {
        user_name: 'shah',
        age: 24
    }
]
console.log(users[1].user_name) // bacha

console.log(Object.keys(fb_user)) 
// [ 'id', 'name', 'is_logged_in' ] which is an array so you can loop it
console.log(Object.values(fb_user))
// [ '777a', 'ubaid', false ] // array so you can loop it
console.log(Object.entries(fb_user))
// [ [ 'id', '777a' ], [ 'name', 'ubaid' ], [ 'is_logged_in', false ] ]
console.log(fb_user.hasOwnProperty('is_logged_in')) // true

