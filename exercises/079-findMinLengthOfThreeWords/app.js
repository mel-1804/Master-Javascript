// Write your function here
function findMinLengthOfThreeWords(word1, word2, word3){
    let minimum = Math.min(word1.length, word2.length, word3.length);
    return minimum;
}

let output = findMinLengthOfThreeWords('aww', 'be', 'see');
console.log(output); // --> 1   
