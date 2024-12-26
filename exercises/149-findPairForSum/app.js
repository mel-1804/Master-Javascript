function findPairForSum(array, number) {
  // your code here
  for(let x=0; x < array.length; x++){
    for(let y=0; y < array.length; y++){
      if(x + y == number) return [x,y];
    }
  }
}

let pair = findPairForSum([3, 34, 4, 12, 5, 2], 9);
console.log(pair); // --> [4, 5]

// si lo hice solaaaa
