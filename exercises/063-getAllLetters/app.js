function getAllLetters(str) {
    // your code here
    let result = str.split('')
    return result;
}

let output = getAllLetters('Radagast');
console.log(output); // --> ['R', 'a', 'd', 'a', 'g', 'a', 's', 't']
