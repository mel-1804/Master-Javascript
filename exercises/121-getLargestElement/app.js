function getLargestElement(arr) {
  // your code here
  return Math.max(...arr);
}

let output = getLargestElement([5, 2, 8, 3]);
console.log(output); // --> 8;