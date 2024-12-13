// function squareElements(arr) {
//   // your code here
//   let newArr = [];
//   for(i in arr){
//     newArr.push(arr[i]**2);
//   }
//   return newArr;
// }

// let output = squareElements([1, 2, 3]);
// console.log(output); // --> [1, 4, 9]


function squareElements(arr) {
  return arr.map((i)=> i**2);
}

let output = squareElements([1, 2, 3]);
console.log(output); // --> [1, 4, 9]


