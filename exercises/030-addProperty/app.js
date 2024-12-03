function addProperty(obj, key) {
  // your code here
  obj[key] = false
  return obj
}
let myObj = {};
addProperty(myObj, 'myProperty');
console.log(myObj.myProperty);