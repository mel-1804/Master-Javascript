function isRotated(str1, str2) {
    // your code here
  if(str1.length != str2.length)
    return false
  
  let aux1 = '';
  let aux2 = '';
  let aux3 = '';
  let result = [];
  
  for(let i=0; i < str1.length; i++){
    aux1 = str1.slice(0, i+1);
    aux2 = str1.slice(i+1, str1.length);
    aux3 = aux2+aux1;
    result.push(aux3);
  }
  
  if(result.includes(str2)){
    return true;
  } else {
    return false;
  }
}
  
  console.log(isRotated('hello world', 'ldhello wor')); // --> true
  console.log(isRotated('hello world', 'omrel wp')); // --> false
  
// si lo hice solaaaaa