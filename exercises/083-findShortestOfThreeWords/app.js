function findShortestOfThreeWords(word1, word2, word3) {
    // your code here
    let short = word1;

    if(word2.length < short.length) short=word2;
    if(word3.length < short.length) short=word3;

    return short;
}

let output = findShortestOfThreeWords('a', 'two', 'three');
console.log(output); // --> 'a'
