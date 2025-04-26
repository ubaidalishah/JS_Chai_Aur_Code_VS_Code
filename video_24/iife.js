// immediately invoked function expression
// syntax
(function hello(){
    // named iife
    console.log("DB Connected")
}) (); // must used simicolon to stop the context
((name) => {
    // unnamed iife
 console.log( `DB connected two ${name}` )
}) ('hello')