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
        for(let x in arr){
            if(parseInt(x)%2==0) return arr[x];
    }

} else if(sumEven > sumOdd){
        for(let x in arr){
            if(parseInt(x)%2!=0) return arr[x];
        }
    }      

}

// Third number is odd, while the rest of the numbers are even
console.log(detectOutlierValue("2 4 7 8 10")); // --> 3 

// Second number is even, while the rest of the numbers are odd
console.log(detectOutlierValue("1 10 1 1"))  // --> 2
