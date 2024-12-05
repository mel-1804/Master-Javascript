// function isEitherEvenOrAreBoth7(num1, num2) {
//     // your code here
//     if(num1%2 == 0 | num2%2 == 0)
//         return true;
//     else if(num1 ==7 & num2==7)
//         return true;
//     else
//         return false;
// }

// let output = isEitherEvenOrAreBoth7(7, 2);
// console.log(output); // --> false


function isEitherEvenOrAreBoth7(num1, num2) {
    // your code here
    if((num1%2 === 0 || num2%2 === 0) || (num1 ===7 && num2===7))
        return true;
    else
        return false;
}

let output = isEitherEvenOrAreBoth7(1, 7);
console.log(output); // --> false

