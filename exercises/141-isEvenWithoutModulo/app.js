function isEvenWithoutModulo(num) {
    // your code here
    if(Number.isInteger(num/2)){
        return true
    } else {
        return false;
    }
}

let output = isEvenWithoutModulo(8);
console.log(output); // --> true
