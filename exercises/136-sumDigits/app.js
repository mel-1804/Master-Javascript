function sumDigits(num) {
    // your code here
    let arrString = num.toString();
    
    let sum = 0;
    for (let i = 0; i < arrString.length; i++){
        if(i === 0 && arrString[i] === '-'){
            sum -= parseInt(arrString[i+1]);
            i++;
        } else {
            sum += parseInt(arrString[i]);
        }
    }

    return sum;
    
 }

let output = sumDigits(-316);
console.log(output); // --> 4



// function sumDigits(num) {
//     // your code here
//     let numStr = num.toString();
//     let sum = 0;
  
//     for (let i = 0; i < numStr.length; i++) {
//       if (i === 0 && numStr[i] === "-") {
//         sum -= Number(numStr[i + 1]);
//         i++;
//       } else {
//         sum += Number(numStr[i]);
//       }
//     }
  
//     return sum;
//   }
  
//   let output = sumDigits(-316);
//   console.log(output); // --> 4