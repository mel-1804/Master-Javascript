function detectOutlierValue(string) {
    // your code here
    let arr = string.split(' ');

    let sumEven = 0;
    let sumOdd = 0;
    for(let element of arr){
        if(parseInt(element)%2===0) {
            sumEven += 1;
        } else {
            sumOdd += 1;
        }
    } 

    if(sumEven < sumOdd){
        for(let i=0; i < arr.length; i++){
            if(parseInt(arr[i])%2==0) return i + 1;
    }

} else if(sumEven > sumOdd){
        for(let i=0; i < arr.length; i++){
            if(parseInt(arr[i])%2!=0) return i + 1;
        }
    }      

}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2

// casi sola, tuve q ver problemas con mis loops (iterar normal, no con for...of ni for... in)