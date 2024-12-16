function getLongestElement(arr) {
    // your code here
    let longest = '';
    for(let i of arr){
        if(i.length > longest.length) longest = i;
    }
    return longest;
}

let output = getLongestElement(['one', 'two', 'three']);
console.log(output); // --> 'three'


// function getLongestElement(arr) {
//     // your code here
//     if (arr.length < 1) return '';
    
//     let aux = '';
//     for (let e of arr) {
//       if (e.length > aux.length) aux = e;
//     }
    
//     return aux;
//   }
  
//   let output = getLongestElement(['one', 'two', 'three']);
//   console.log(output); // --> 'three'
