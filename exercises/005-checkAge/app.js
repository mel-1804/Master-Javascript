function checkAge(name, age) {
  // your code here
  if(age>=21){
    console.log('Welcome, '+name+'!');
  } else {
    console.log('Go home, '+name+'!');
  }
}

let output = checkAge('Nacho', 25);
console.log(output);