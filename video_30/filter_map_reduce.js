//for each loop

// some notes:
// use map if you want to tranform an array
//so in map tranformation is applied to each and every element of the array if you want to double the values of the array, triple or just want the binary of the elements of the array if it is numbers

// filter is basically used to filter some values of the array and return it as a new array

// reduce method is used when we need a single output from the array like if we need to find the max number in an array or we need the sum of the array elements

const coding = ["js", "cpp", "python", "java"];
let my_return_items = coding.forEach((item) => {
  return item;
});
console.log(my_return_items); // undefined
// to do this in foreach loop we will use this approach
let my_new_array = [];
coding.forEach((item) => {
  my_new_array.push(item);
});
console.log(my_new_array); // [ 'js', 'cpp', 'python', 'java' ]

// in filter we can directly return
let return_coding_array = coding.filter((item) => item);
console.log(return_coding_array);
//[ 'js', 'cpp', 'python', 'java' ]

// dumy titles + dates + genre
const movies = [
  {
    title: "dragon",
    genre: "drama",
    relase: "2025",
  },
  {
    title: "titanic",
    genre: "romance",
    relase: "2005",
  },
  {
    title: "idiots",
    genre: "comedy",
    relase: "2010",
  },
  {
    title: "mai hoon na",
    genre: "drama",
    relase: "2013",
  },
];

// filter method
movies.filter((item) => {
  if (item.title === "dragon") {
    console.log(item.relase); //2025
  }
});

movies.filter((item) =>
  item.genre === "comedy"
    ? console.log(item.title, "this is a comedy movie")
    : console.log(item.title, "is not a comedy movie")
);
// dragon is not a comedy movie
// titanic is not a comedy movie
// idiots this is a comedy movie
// mai hoon na is not a comedy movie

let movie_return = movies.filter((item) => item.relase === "2005");
console.log(movie_return);
// [ { title: 'titanic', genre: 'romance', relase: '2005' } ]

let filter_numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 8];
function odd_numbers(x) {
  return x % 2;
}
let odd_numbers_array = filter_numbers.filter(odd_numbers);
console.log(odd_numbers_array);
//[ 1, 3, 5, 5, 7 ]

// map method
let my_numbers = [1, 2, 3, 4, 5, 6, 6, 7, 7, 8, 8, 9, 9];
const new_nums = my_numbers.map((num) => {
  return num + 10;
});
console.log(new_nums);
// [
//     11, 12, 13, 14, 15, 16,
//     16, 17, 17, 18, 18, 19,
//     19
//   ]

// chaning of methods
const chaning_of_methods = my_numbers
  .map((num) => num * 10)
  .map((num) => num + 1);

console.log(chaning_of_methods);
// [
//     11, 21, 31, 41, 51, 61,
//     61, 71, 71, 81, 81, 91,
//     91
//   ]

let chaning_of_methods_2 = my_numbers
  .map((num) => {
    return num + 15;
  })
  .filter((num) => {
    return num >= 20;
  });
console.log(chaning_of_methods_2);
//  [
//   20, 21, 21, 22, 22,
//   23, 23, 24, 24
// ]

// reduce method

// finding sum :
// common method like using the simple function
let finding_sum_array = [1, 2, 3, 4, 5];

function sum_of_the_array(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
console.log(sum_of_the_array(finding_sum_array)); // 15

// doing the same using reduce method
sum_using_reduce = finding_sum_array.reduce((acc, curr) => {
  acc = acc + curr;
  return acc;
}, 0);
console.log(sum_using_reduce); // 15

// finding max in array using traditional method
let finding_max_in_array = [1, 2, 3, 4, 56, 7, 7, 8, 90, 28];
function max_in_array(arr) {
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  console.log(max);
}
max_in_array(finding_max_in_array); // 90

// using reduce to find max in an array
let max_in_array_reduce = finding_max_in_array.reduce((max, curr) => {
  if (curr > max) {
    max = curr
  }
  return max
}, 0);
console.log(max_in_array_reduce); // 90
