// Write your function here
function getElementsGreaterThan10AtProperty(obj, key){
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
        return []
    } else{
        return obj[key].filter((element)=> element > 10)
    };
}

let obj = {
    key: [1, 20, 30]
  };
  let output = getElementsGreaterThan10AtProperty(obj, 'key');
  console.log(output); // --> [20, 30]