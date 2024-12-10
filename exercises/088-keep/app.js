// Write your function here
function keep(arr, element){
    let newArr = arr.filter((i) => i ==element);
    return newArr;
}

let output = keep([1, 2, 3, 2, 1], 2)
console.log(output); // --> [2, 2]