"use strict"
//Q1
// my answer
var oddNumber = prompt("enter an odd number between 1 to 50");
console.log("Your number to skip is:" + oddNumber);
for (var i = 1; i < 50; i++) {

    if (i % 2 === 1) {
        console.log('Here is an odd number:' + i);
        continue;
    }
    if (i === oddNumber) {
        console.log('Yikes! Skipping number:' + i);
    }
}

