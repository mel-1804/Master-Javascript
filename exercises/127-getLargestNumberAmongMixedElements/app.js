function getLargestNumberAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0) return 0;

    let aux = 0;
    for(let element of arr){
        if(typeof element === 'number' && element > aux){
            aux = element;
        }
    }

    return aux;
}

let output = getLargestNumberAmongMixedElements([3, 'word', 5, 'up', 3, 1]);
console.log(output); // --> 5
