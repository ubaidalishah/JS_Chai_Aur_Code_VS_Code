const result = document.querySelector("#result");
document.querySelector("ul").addEventListener("click", () => {
  result.innerHTML = "Clicked on UL";
});
document.querySelector("#second").addEventListener("click", (e) => {
  result.innerHTML = "Clicked on the 2nd Element of UL";
  e.stopPropagation(); // to prevent the event bubbling or propagation
  //   e.preventDefault() // used for default behavior of the link or submit button
});

// event bubbling is the default behavior or when the the 3rd parameter of the addeventlistener function is false
// basically event bubbling is -- first the parent element in which the event is already there and on the child the event is also there so first the parent event will be activated then the child but if the parameter is changed to true then first the child event will be activated then the parent we can stop this and only activate the function which a child have separately by stopping the propagation

// removing li elements
const li_elements = document.querySelectorAll(".items");
li_elements.forEach((li) =>
  li.addEventListener("click", (e) => {
    e.target.remove();
  })
);
