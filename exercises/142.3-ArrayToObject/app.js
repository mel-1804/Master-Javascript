function transformEmployeeData(array) {
  // your code here
  let obj=[];
  for(let i of array){
    let aux = {};
    for(let e of i){
      aux[e[0]] = e[1];
    }
    obj.push(aux);
  }
  return obj;
}


let output = transformEmployeeData([[['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']], [['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']]]);
console.log(output); // --> [{ firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk' }, { firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager' }]