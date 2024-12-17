// function joinArrayOfArrays(arr) {
//   // your code here
//   let result = arr.concat(...arr);
  
//   return result.filter((element)=> !Array.isArray(element));
// }

// let output = joinArrayOfArrays([
//   [1, 4],
//   [true, false],
//   ['x', 'y'],
// ]);

// console.log(output); // --> [1, 4, true, false, 'x', 'y']


function joinArrayOfArrays(arr) {
  // your code here
  let aux = [];
  for (let i of arr){
    aux = aux.concat(i);
  }

  return aux;
}

let output = joinArrayOfArrays([
  [1, 4],
  [true, false],
  ['x', 'y'],
]);

console.log(output); // --> [1, 4, true, false, 'x', 'y']
