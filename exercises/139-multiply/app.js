function multiply(num1, num2) {
    // your code here
    let result = 0;
    for (let i=1; i<=num2; i++){
        result+= num1;
    }
    
    return result;
}

let output = multiply(4, 7);
console.log(output); // --> 28
