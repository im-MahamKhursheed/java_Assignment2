var marks = Number(prompt("Total marks. Enter your marks:"));
var grade;
var scholarship = false;
var percentage = (marks / 500) * 100;
if (percentage >= 90) {
    grade = "A+";
    scholarship = true;
} 
else if (percentage >= 80) {
    grade = "A";
    scholarship = true;
} 
else if (percentage >= 70 && percentage < 80) {
    grade = "B";
} 
else if (percentage >= 60 && percentage < 70) {
    grade = "C";
} 
else if (percentage >= 50 && percentage < 60) {
    grade = "D";
} 
else {
    grade = "Fail";
}

if (scholarship) {
    console.log("Your grade is: " + grade);
    console.log("You are eligible for scholarship");
    alert("Your grade is "+grade+". You are eligible for scholarship.");
} 
else {
    console.log("Your grade is: " + grade);
    console.log("You are not eligible for scholarship");
    alert("Your grade is "+grade+". You are not eligible for scholarship.");
}