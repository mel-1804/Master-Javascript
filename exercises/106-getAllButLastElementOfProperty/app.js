// function getAllButLastElementOfProperty(obj, key) {
//     // your code here
//     if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
//       return [];
//     } else {
//       return obj[key].filter(i => i <= (obj[key].length-1));
//     }
// }

// let obj = {
//   key: [1, 2, 3]
// };
// let output = getAllButLastElementOfProperty(obj, 'key');
// console.log(output); // --> [1, 2]



function getAllButLastElementOfProperty(obj, key) {
  // your code here
  if (!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
    return [];
  } else {
    return obj[key].slice(0,2);
  }
}

let obj = {
key: [1, 2, 3]
};
let output = getAllButLastElementOfProperty(obj, 'key');
console.log(output); // --> [1, 2]