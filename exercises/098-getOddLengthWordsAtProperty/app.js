// // Write your function here
// function getOddLengthWordsAtProperty(obj, key){
//     if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
//         return []
//     } else {
//         newArr = [];
//         for (i in obj[key]){
//             if(obj[key][i].length % 2 !== 0){
//                 newArr.push(obj[key][i])
//             }
//         }
//     }
//     return newArr;
// }

// let obj = {
//     key: ['It', 'has', 'some', 'words']
//   };
//   let output = getOddLengthWordsAtProperty(obj, 'key');
//   console.log(output); // --> ['has', 'words']


  function getOddLengthWordsAtProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
        return []
    } else {
       return obj[key].filter((i) => i.length % 2 !== 0)
    };
    
}

let obj = {
    key: ['It', 'has', 'some', 'words']
  };
  let output = getOddLengthWordsAtProperty(obj, 'key');
  console.log(output); // --> ['has', 'words']