// Write your function here
function getLastElementOfProperty(obj, key){
    if (!(obj[key]) || !(Array.isArray(obj[key]))){
        return undefined
    } else {
        return obj[key][(obj[key].length) -1];
    }
}

let obj = {
    key: [1, 2, 5]
  };
  let output = getLastElementOfProperty(obj, 'key');
  console.log(output); // --> 5