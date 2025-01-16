function search(array, value) {
  // your code here
  let stop = Math.floor(array.length /2);
  if(value <= stop){
    for(let i = 0; i=stop; i++){
      if(array[i] == value) {
        return i;
      }  
    }
  } else {
    for(let i = stop; i < array.length; i++){
      if(array[i] == value) {
        return i;
    }
  }
}
}

let arr = [1, 3, 16, 22, 31, 33, 34]
console.log(search(arr, 31)); // --> 4




// function findMissing(array) {
//   // your code here
//   for(let i=0; i < array.length; i++){
//     if((array[i] >0) && (array[i] - array[i-1] > 1)) {
//       return array[i-1] + 1;
//     }     
//   }
// }

// let arr = [-5,-4,-3,-1, 0, 1, 2, 3, 5, 6, 7, 9]
// console.log(findMissing(arr)); // --> 4


// function findMissing(array) {
//   // your code here
//   for(i in array){
//     if((array[i] >0) && (array[i] - array[i-1] > 1)) {
//       return array[i-1] + 1;
//     }     
//   }
// }

// let arr = [-5,-4,-3,-1, 0, 1, 2, 3, 5, 6, 7, 9]
// console.log(findMissing(arr)); // --> 4

