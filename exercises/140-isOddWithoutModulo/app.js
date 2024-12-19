function isOddWithoutModulo(num) {
    // your code here
    if(Number.isInteger(num/2)) {
        return false;
    } else {
        return true;
    }
}

let output = isOddWithoutModulo(17);
console.log(output); // --> true
