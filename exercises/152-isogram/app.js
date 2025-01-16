function isIsogram(text) {
  // your code here
  let arr = text.split("");
  for(let i=0; i< arr.length; i++){
    if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])){
      return false;
    }
  } return true;
}

console.log(isIsogram("Camile")); // --> true
console.log(isIsogram("Camille")); // --> false


// no pude sola T-T. El return truetenbía que estar fuera del bucle, si no el bucle se detiene luego de la primera iteración.