// function or(expression1, expression2) {
//   // your code here
//   let result = expression1 
//   if(result != expression1){
//     result == expression2
//   }
// }

// let output = or(true, false);
// console.log(output); // --> true;


function or(expression1, expression2) {
  // your code here
  return !(!expression1 && !expression2);
}

let output = or(true, false);
console.log(output); // --> true;

