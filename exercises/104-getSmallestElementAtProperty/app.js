function getSmallestElementAtProperty(obj, key) {
    // your code here
    if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
      return [];
    } else {
      return Math.min(...obj[key]);
    }
}

let obj = {
  key: [2, 1, 5]
};
let output = getSmallestElementAtProperty(obj, 'key');
console.log(output); // --> 1



// function getSmallestElementAtProperty(obj, key) {
//   // your code here
//   if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
//     return [];
//   } else {
//     let aux = obj[key][0];
//     for(i in obj[key]){
//       if(obj[key][i]<aux){
//         aux= obj[key][i]
//       }
//     }
//     return aux;
//   }
// }

// let obj = {
// key: [2, 1, 5]
// };
// let output = getSmallestElementAtProperty(obj, 'key');
// console.log(output); // --> 1
