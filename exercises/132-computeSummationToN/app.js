function computeSummationToN(n) {
  // your code here
  let aux = 0;
  for(let i=1; i<=n; i++){
    aux += i;
  }
  return aux;
}

let output = computeSummationToN(6);
console.log(output); // --> 21

