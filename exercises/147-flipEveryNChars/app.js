function flipEveryNChars(input, n) {
    // your code here
    let regex = new RegExp(`.{1,${n}}`, 'g');
    let result = input
    .split(parsed)
    .map((e) => e.split('').reverse().join(''))
    .join('');
  return result;
}

let input = 'a short example';
let output = flipEveryNChars(input, 5);
console.log(output); // --> ohs axe trelpma

// no pude sola y me cuesta mucho entender esto
