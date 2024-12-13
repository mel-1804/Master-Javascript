// function computeProductOfAllElements(arr) {
//   // your code here
//   let product = 1;
//   return arr.reduce((a,b)=>a*b);
// }

// let output = computeProductOfAllElements([2, 5, 6]);
// console.log(output); // --> 60




function computeProductOfAllElements(arr) {
  // your code here
  let product = 1;
  for (let i of arr){
    product *= i;
  }
  return product;
}

let output = computeProductOfAllElements([2, 5, 6]);
console.log(output); // --> 60