function getLargestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return [];
    } else {
      return Math.max(...obj[key]);
    }
}


let obj = {
  key: [1, 2, 4]
};
let output = getLargestElementAtProperty(obj, 'key');
console.log(output); // --> 4




// function getLargestElementAtProperty(obj, key) {
//   // your code here
//   if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
//     return [];
//   } else {
//     let maximum = 0;
//     for (i in obj[key]){
//       if(obj[key][i] > maximum){
//         maximum= obj[key][i];
//       }
//     }
//     return maximum;
//   }
// }


// let obj = {
// key: [1, 2, 4]
// };
// let output = getLargestElementAtProperty(obj, 'key');
// console.log(output); // --> 4