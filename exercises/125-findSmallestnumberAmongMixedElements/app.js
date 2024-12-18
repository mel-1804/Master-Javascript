function findSmallestNumberAmongMixedElements(arr) {
  // your code here
  if(arr.length === 0) return 0

  let aux = Infinity;
  for(let element of arr){
    if(typeof element === 'number' && element < aux){
      aux = element;
    }
  }
  return aux;
}

let output = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output); // --> 4
