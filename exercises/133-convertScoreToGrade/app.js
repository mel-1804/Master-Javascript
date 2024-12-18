function convertScoreToGrade(score) {
    // your code here
    if(score < 0 || score > 100) return "invalid score";
    if(score <= 59){
        return "F";
    } else if (score <= 69) {
        return "D";
    } else if (score <= 79) {
        return "C";
    } else if (score <= 89){
        return "B";
    } else {
        return "A";
    }
}

let output = convertScoreToGrade(80);
console.log(output); // --> 'A'
