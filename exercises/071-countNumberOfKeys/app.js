let obj = {
    firstName: "Rafael",
    lastName: "Leao",
    country: "Italy",
    city: "Milan",
    phoneNum: "123-456-789",
    jerseyNum: 27
}

function countNumberOfKeys(obj) {
    // your code here
   let arr = Object.keys(obj)
    return arr.length;
}

let output = countNumberOfKeys(obj);
console.log(output); // --> 6
