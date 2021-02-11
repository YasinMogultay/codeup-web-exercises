"use strict";


// Get and set the class/id on the element by toggling
$(".card").click(function (){
    $(this).toggleClass("toggleClass")
});

// Get and modify the css values from an element
$(".card").hover(
    function (){
        $(this).css("backgroundColor", "black");
    },
    function (){
        $(this).css("backgroundColor", "")
    }
);
//Another answer for that question
let hoverIn = function () {
    $(this).css({
        backgroundColor: "black",
        color: "white"
    });
};

let hoverOut = function () {
    $(this).css({
        backgroundColor: "",
        color: ""
    })
}
// hover usually takes in two parameters
$('.card').hover(hoverIn, hoverOut);

//Get and modify the text value from an element
console.log($(".list-group > li")); // log the result if you are not sure

$(".list-group > li").dblclick(function (){
    $(this).text("I GOT CLICKED!");
    $(this).click(function (){
        $(this).text("ahh ... better")
    })
});

//Write a handler function that is passed in to the event create a new element and append it to another element


// this function making a new object
function getInputData (){
    let first = $("#first").val();
    let last = $('#last').val();
    let handleField = $('#handleField').val();

    return {
        id: 4, firstName: first, lastName: last, handleField: handleField
    };
}
// Create a new element and append it to another element
$("#submitBtn").click(function (){
    // console.log(getInputData());

    let inputData = getInputData();

    let tableRow = $("<tr></tr>>");

    let td1 = $("<td></td>>").text(inputData.id);
    let td2 = $("<td></td>>").text(inputData.firstName);
    let td3 = $("<td></td>>").text(inputData.lastName);
    let td4 = $("<td></td>>").text(inputData.handleField);

    tableRow.append([td1, td2, td3, td4]);

    console.log(tableRow)
    $("tbody").append(tableRow)
})

//Question 5
// create the elements from that match the html
// let cellCount =$('tr').first().children().length;
// console.log(cellCount);


// Get an attribute value from an element
$("img").click(function (){
    $(this).attr("src", "img/photo-1.jpeg");
    $(this).attr("alt", "resistance is futile");
});

// Another Question
// $('#submitBtn').click(function (){
//     window.location.replace("https://www.google.com/"); // Use the window object to navigate to a new url in the browser
//     location.reload(); // Use the window object to reload a page
// })

//How to get text from an input field and ADD text to it (not replace)
$("#first").val($("#first").val() + " CARLOOOOOOS")

//second approach for above question
// var great = $("#first");
// great.val($("#first").val() + "SAM!!!!")
//







