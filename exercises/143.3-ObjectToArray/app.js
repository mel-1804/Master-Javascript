// function convertObjectToList(obj) {
//   // your code here
//   let arr = [];
//   for (let key in obj){
//     let aux = [];
//     aux.push(key, obj[key]);
//     arr.push(aux);
//   }

//   return arr;
// }

// let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
// console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]




function convertObjectToList(obj) {
  // your code here
  let arr = [];
  for (let key in obj){
   arr.push([key, obj[key]])
  }

  return arr;
}

let output = convertObjectToList({ name: 'Holly', age: 35, role: 'producer' });
console.log(output); // --> [ ['name', 'Holly'], ['age', 35], ['role', 'producer'] ]
