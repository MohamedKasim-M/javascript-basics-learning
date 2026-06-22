//Calculator logic

let num1 = 5;
let num2 = 2;
let operator = "/";

if(operator === "+") {
    console.log(num1 + num2);
} 
else if(operator === "-") {
    console.log(num1 - num2);
} 
else if(operator === "*") {
    console.log(num1 * num2);
}
else if(operator === "/") {
    if(num2 !== 0){
        console.log(num1 / num2);
    } else {
        console.log("Cannot divided by Zero");
    }
}
else{
    console.log("Invalid operator");
}





//Determine Pass/Fail using Ternary operator

let marks = 95;
let result = marks >= 50 ? "Pass" : "Fail";
console.log("Result :", result);

//Determine the grade using if-else


let bonus = 5;
marks += bonus;
let grade;

if(marks >= 90 && marks <= 100){
    grade = "grade A";
console.log(grade,":",marks);
}
else if(marks >= 70 && marks < 90){
    grade = "grade B";
    console.log(grade,":", marks);
}
else if(marks >= 50 && marks < 70){
    grade = "grade C";
    console.log(grade,":", marks);
}
else if( marks >= 0 && marks < 50){
    grade = "grade F";
    console.log(grade,":", marks);
}
else{
    console.log("Not Valid");
}


//Give remarks based on grade using a switch statement


let remarks;

switch(grade){
    case "grade A" :
        remarks = "Excellent";
        console.log(remarks);
        break;
    case "grade B" :
        remarks = "Good";
        console.log(remarks);
        break;
    case "grade C" :
        remarks = "Average";
        console.log(remarks);
        break;
    case "grade F" :
        remarks = "Needs Improvement";
        console.log(remarks);
        break;
    default :
        console.log("Invalid Grade");

}



