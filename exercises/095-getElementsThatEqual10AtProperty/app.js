// Write your function here
function getElementsThatEqual10AtProperty(obj, key){
    if(!(obj[key]) || !(Array.isArray(obj[key])) || (obj[key].length == 0)){
        return []
    } else {
        return obj[key].filter((element) => element == 10);
    }
}

let obj = {
    key: [1000, 50, 10]
  };
  let output = getElementsThatEqual10AtProperty(obj, 'key');
  console.log(output); // --> [10, 10]