"use strict";

console.log('Hello from external JavaScript');

alert('Welcome to my Website!');

var userInput = prompt('What is your favorite color');
alert('Great, ' + userInput + ' is my favorite color too!');


var littleMermaid = parseInt(prompt('How many days do you want to rent littleMermaid ?'));
var brotherBear = parseInt(prompt('How many days do you want to rent brotherBear ?'));
var hercules = parseInt(prompt('How many days do you want to rent hercules ?'));
var moviePrice = parseInt(prompt('What is our movie price'));
var totalPrice = (hercules + brotherBear + littleMermaid) * moviePrice;
alert(totalPrice);

var amazonPay = parseInt(prompt('How much is your hourly wage for Amazon ?'));
var googlePay = parseInt(prompt('How much is your hourly wage for Google ?'));
var facebookPay = parseInt(prompt('How much is your hourly wage for Facebook ?'));
var amazonHours = parseInt(prompt('How many hours did you work for Amazon ?'));
var googleHours = parseInt(prompt('How many hours did you work for Google ?'));
var facebookHours = parseInt(prompt('How many hours did you work for Facebook ?'));
var amountEarned = (amazonHours * amazonPay) + (googleHours * googlePay) + (facebookHours * facebookPay);
alert("Your earning is $" + amountEarned);

var classIsNotFull = true;
var classDoesNotConflict = true;
var acceptedClass = classIsNotFull && classDoesNotConflict;
alert(acceptedClass);

// var itemsBought = parseInt(prompt('How many items have you buy ?'));
// var offerValid = confirm('Do you have an valid offer ?')
// var isPremiumMember = confirm('Do you have a premium membership ?')
// var canApplyOffer = offerValid && (itemsBought >= 2 && isPremiumMember);
// alert(canApplyOffer);