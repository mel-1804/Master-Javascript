function getProperty(obj, key) {
  // your code here
  return obj[key];
  
}
let car ={
  model: 'toyota',
  year: 2019
};

let test = getProperty(car, 'year');
console.log(test);
