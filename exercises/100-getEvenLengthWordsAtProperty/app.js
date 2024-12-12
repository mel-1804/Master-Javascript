// function getEvenLengthWordsAtProperty(obj, key) {
//     // your code here
//     if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
//       return []
//     } else {
//       let newArr = [];
//       for (i in obj[key]){
//         if (obj[key][i].length %2 === 0){
//           newArr.push(obj[key][i])}
//       }
//       return newArr;
//     }
// }

// let obj = {
//   key: ['a', 'long', 'game']
// };
// let output = getEvenLengthWordsAtProperty(obj, 'key');
// console.log(output); // --> ['long', 'game']




function getEvenLengthWordsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
    return []
  } else {
   return obj[key].filter(i => i.length % 2 === 0)
  }
}

let obj = {
key: ['a', 'long', 'game']
};
let output = getEvenLengthWordsAtProperty(obj, 'key');
console.log(output); // --> ['long', 'game']
