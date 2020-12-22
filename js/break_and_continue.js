"use strict"
//Q1

function isValid(input) {
    input = parseFloat(input);
    var isNumeric = !isNaN(input);
    var isOdd = input % 2 === 1;
    var correctRange = 1 <= input <= 50;
    return isNumeric && isOdd && correctRange;
}

var userNum;
while (true) {
    userNum = parseFloat(prompt("Please enter an odd number between 1 and 50"));
    if (isValid(userNum)) {
    break;
    }
    alert( " INVALID NUMBER " )
}
console.log("Number to skip is  " + userNum);

for (var i = 1; i <= 50; i += 1) {
    if (i === userNum){
        console.log("Yikes skipping number:" + userNum);
        continue;
    }
    if (i % 2 === 0) {
        continue;
    }
    console.log("Here is an odd number: " + i);
}