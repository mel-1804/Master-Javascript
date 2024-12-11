// Write your function here
function removeElement(arr, discarter){
    let newArr = arr.filter((i)=> i!=discarter );
    return newArr;
}

let output = removeElement([1, 2, 3, 2, 1], 2);
console.log(output); // --> [1, 3, 1]