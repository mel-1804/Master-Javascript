function getStringLength(string) {
    // your code here
    let result = 0;
    for(let i in string){
        result += 1;
    }

    return result;
}

let output = getStringLength('hello');
console.log(output); // --> 5
