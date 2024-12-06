function getAllWords(str) {
    // your code here
    let result = str.split(' ')
    return result;
}

let output = getAllWords('Radagast the Brown');
console.log(output); // --> ['Radagast', 'the', 'Brown']
