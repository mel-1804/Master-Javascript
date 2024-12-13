function getSumOfAllElementsAtProperty(obj, key) {
    // your code here
    if(!obj[key] || !Array.isArray(obj[key]) || obj[key].length === 0){
        return 0
      } else {
        let sum = 0;
        for(i in obj[key]){
          sum += obj[key][i];
        }
        return sum;
      }
}

let obj = {
    key: [4, 1, 8]
};
let output = getSumOfAllElementsAtProperty(obj, 'key');
console.log(output); // --> 13
