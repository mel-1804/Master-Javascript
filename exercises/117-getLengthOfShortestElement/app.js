function getLengthOfShortestElement(arr) {
    // your code here
    let newArr = arr.map((num)=> num.length);
    let shorest = Math.min(...newArr);
    return shorest;
}

let output = getLengthOfShortestElement(['one', 'two', 'three']);
console.log(output); // --> 3
