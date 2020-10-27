function getGrade(score) {
    let grade;
 
// Write your code here
    if((25 < score) && (score <= 30)){
        return grade = "A";
    } else if((20 < score) && (score <= 25)){
        return grade = "B";
    } else if((15 < score) &&(score <= 20)){
        return grade = "C";
    } else if((10 < score) && (score <= 15)){
        return grade = "D";
    } else if((5 < score) && (score <= 10)){
        return grade = "E";
    } else if((0 <= score) && (score <= 5)){
        return grade = "F";
    }
    return grade;
}
