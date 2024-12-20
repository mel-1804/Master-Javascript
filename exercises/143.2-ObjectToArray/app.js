function listAllValues(obj) {
  // your code here
  let arr =[];
  for (let key in obj){
    arr.push(obj[key]);
  }

  return arr;
}

let output = listAllValues({ name: 'Sam', age: 25, hasPets: true });
console.log(output); // --> [ 'Sam', 25, true ]
