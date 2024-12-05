function getElementsUpTo(array, n) {
  // your code here
  let newArray = array.slice([0],[n])
  return newArray;
}

let output = getElementsUpTo(['a', 'b', 'c', 'd', 'e'], 3) 
console.log(output); // --> ['a', 'b', 'c']
