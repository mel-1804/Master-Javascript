function computeSumOfAllElements(arr) {
  // your code here
  let sum = 0;
  for (let i of arr){
    sum += i;
  }

  return sum;
}

let output = computeSumOfAllElements([1, 2, 3])
console.log(output); // --> 6
