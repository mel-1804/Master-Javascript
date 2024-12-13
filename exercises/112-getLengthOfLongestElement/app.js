function getLengthOfLongestElement(arr) {
    // Your code here
    let newArr = [];
    for(i in arr){
        newArr.push(arr[i].length)
    }
    let max = Math.max(...newArr);
    return max;
}

let output = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output); // --> 5
