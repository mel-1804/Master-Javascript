// function findSmallestElement(arr) {
//     // your code here
// return Math.min(...arr);
// }

// let output = findSmallestElement([4, 1, 9, 10]);
// console.log(output); // --> 1





function findSmallestElement(arr) {
    // your code here
    let min= arr[0];
    for(let i of arr){
        if(i< min) min= i
    }

    return min;
}

let output = findSmallestElement([4, 1, 9, 10]);
console.log(output); // --> 1