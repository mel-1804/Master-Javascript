function findShortestWordAmongMixedElements(arr) {
    // your code here
    if(arr.length === 0){
        return '';
    } else {

    let aux = '';
    let shortestLength = Infinity;

    for(let e of arr){
        if((typeof e ==='string') && (e.length < shortestLength)){
                aux = e;
                shortestLength = e.length;
            }
        }
        return aux;
    }
}
    


let output = findShortestWordAmongMixedElements([4, 'two', 2, 'three']);
console.log(output); // --> 'two'
