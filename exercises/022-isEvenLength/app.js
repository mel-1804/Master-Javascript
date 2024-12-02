// Write your function here
function isEvenLength(word){
    if((word.length)%2==0)
        return true
    else
        return false;
}
let test = isEvenLength('wows');
console.log(test);