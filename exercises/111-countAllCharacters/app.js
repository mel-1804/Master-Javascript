// Write your function here
function countAllCharacters(str){
    if(str.length === 0){
        return{}
    }
    let obj = {}

    for(i in str){
        if(obj[str[i]]){
            obj[str[i]] = obj[str[i]] +1
        } else {
            obj[str[i]]= 1
        }
    }

    return obj;
}

let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}



