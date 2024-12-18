// function average(arr) {
//   // your code here
//   return sum(arr)/(arr.length);
// }

// function sum(arr) {
//   // your code here
//   let sum = 0;
//   for (let element of arr){
//     sum += element;
//   }

//   return sum;
// }

// console.log(average([1, 2])); // --> 1.5
// console.log(sum([1,2]));




function average(arr) {
  // your code here
  return sum(arr)/(arr.length);
}

function sum(arr) {
  // your code here
  return arr.reduce((a,b) => a+b);
}

console.log(average([1, 2])); // --> 1.5
console.log(sum([1,2]));