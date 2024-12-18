function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if(score < 0 || score > 100) return "invalid score";
    if (score <= 59) return "F";
    if (score <= 62) return "-D";
    if (score <= 67) return "D";
    if (score <= 69) return "+D";
    if (score <= 72) return "-C";
    if (score <= 77) return "C";
    if (score <= 79) return "+C";
    if (score <= 82) return "-B";
    if (score <= 87) return "B";
    if (score <= 89) return "+B";
    if (score <= 92) return "-A";
    if (score <= 97) return "A";
    if (score <= 100) return "+A";
    
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
