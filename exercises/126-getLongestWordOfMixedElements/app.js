function getLongestWordOfMixedElements(arr) {
    // your code here
    if( arr.length === 0) 
        return '';

    let aux = '';
    for (let element of arr){
        if(typeof element === 'string' && element.length > aux.length){
            aux= element;
        }
    }

    return aux;
}

let output = getLongestWordOfMixedElements([3, 'word', 5, 'up', 3, 1, 'elephant']);
console.log(output); // --> 'word'
