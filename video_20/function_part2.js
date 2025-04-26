function calculate_cart_price(...item){
    return item
   }
   console.log(calculate_cart_price(220,24,12,424,42,12))
   //[ 220, 24, 12, 424, 42, 12 ]
   // using rest operators the we are passing and returning all the values
   const user = {
    username: "ubaid",
    price : 199,

   }
   function handle_object(any_object){
   console.log(`user name is ${any_object.username} and the price is ${any_object.price}`)
   }
   handle_object(user)
   
   handle_object({
    username: "ali",
    price : 44
   })

   const my_array = [1,2,45,5,5]
   function return_array_thrid_element(any_array){
    return ` the third element of the array is ${any_array[2]}`
   }
   console.log(return_array_thrid_element(my_array))
   