// Write your function here
function isOddLength(word){
    if((word.length)%2!=0)
        return true;
    else
        return false;
}

let test = isOddLength('doves');
console.log(test);