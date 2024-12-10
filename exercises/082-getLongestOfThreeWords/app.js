function getLongestOfThreeWords(word1, word2, word3) {
    // your code here
   let max = '';
   if(word1.length>max.length) max=word1;
   if(word2.length>max.length) max=word2;
   if(word3.length>max.length) max=word3;

   return max;

}

let output = getLongestOfThreeWords('these', 'three', 'words');
console.log(output); // --> 'these'

