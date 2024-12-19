function modulo(num1, num2) {
    // your code here
    if(num1 === 0) return 0;
    if(num2 === 0) return NaN;

    let aux = num1/num2;
    let aux1 = aux - Math.floor(aux);
    let remainder = aux1 * num2;

    return remainder;
}

let output = modulo(25, 4);
console.log(output); // --> 1
