function getAverageOfElementsAtProperty(obj, key) {
  // your code here
  if(!obj[key] || !Array.isArray(obj[key] || obj[key].length === 0))
  
  {let sum = 0;
  for (i in obj[key]){
    sum += obj[key][i]
  };

  let average = sum/(obj[key].length);
  return average;}
}

let obj = {
  key: [1, 2, 3]
};
let output = getAverageOfElementsAtProperty(obj, 'key');
console.log(output); // --> 2  