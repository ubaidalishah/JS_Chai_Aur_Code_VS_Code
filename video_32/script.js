heading = document.querySelector(".heading");
heading.innerText = "Hi i am ubaid";

// installed dom extensions and the below is their shortcuts
// const Name = document.getElementsByClassName('Id');
// const Name = document.getElementsByClassName('Id');
// gcn get element by class name
//gid get element by id
//gn get element by name
//gtn get element by tag

// gid	const name = document.getElementById('tag')
// gcn	const name = document.getElementsByClassName('tag');
// gn	const name = document.getElementByName('tag');
// gtn	const name = document.getElementsByTagName('tag');

// gid→	const var = document.getElementById('id')
// dqs→	const var = document.querySelector('selector');
// dqa→	const var = document.querySelectorAll('selector');
// dce→	const var = document.createElement('element');

const paragraph = document.querySelectorAll(".paragraph"); // it select all the elements with the class name of parahgraph
// and return a node list so if you want to change some properties of the items return by it you should do like the below
// paragraph[0].style.color = 'green'
const my_list = document.querySelectorAll("li");
my_list.forEach((item) => {
  item.style.backgroundColor = "red";
});

// changing the the HTML collection to the array so that we can apply map on it
const second_list = document.getElementsByClassName("list-items");
second_list_array = Array.from(second_list);
second_list_array.map((item) => {
  item.style.color = "blue";
});

