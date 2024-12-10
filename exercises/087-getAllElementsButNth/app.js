function getAllElementsButNth(array, n) {
    // your code here
    array.splice(n, 1);
    return array;
}

let output = getAllElementsButNth(['a', 'b', 'c'], 1);
console.log(output); // --> ['a', 'c']


// function getAllElementsButNth(array, n) {
//     // your code here
//     return array.splice(n, 1);

// }

// let output = getAllElementsButNth(['a', 'b', 'c'], 1);
// console.log(output); // --> ['a', 'c']