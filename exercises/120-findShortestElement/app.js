function findShortestElement(arr) {
    // your code here
   let shortest = arr[0];
   for (let i of arr){
    if(i.length < shortest) shortest= i
   }
   return shortest; 
}

let output = findShortestElement(['a', 'two', 'three']);
console.log(output); // --> 'a'