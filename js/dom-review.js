"use strict";


// Get an element by id, class, or tag name Add click, hover, dblClick events to elements
$(".card").click(function (){
    $(this).toggleClass("toggleClass")
});

//2 Question
$(".card").hover(
    function (){
        $(this).css("backgroundColor", "black");
    },
    function (){
        $(this).css("backgroundColor", "")
    }
)

//Question 3
console.log($(".list-group > li")); // console log always if you are not sure

$(".list-group > li").dblclick(function (){
    $(this).text("I GOT CLICKED!");
    $(this).click(function (){
        $(this).text("ahh ... better")
    })
});

//Question 4
//1)get the data
//2)bundle the data (maybe)
//3)create the elements from that match the html
//4)inject the data into the elements
//5)add the elements to the DOM ((get the input's ID's))

function getInputData (){
    let first = $("#first").val();
    let last = $('#last').val();
    let handleField = $('#handleField').val();

    return {
        id: 4, firstName: first, lastName: last, handleField: handleField
    };
}

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
//create the elements from that match the html
// let cellCount =$('tr').first().children().length;
// console.log(cellCount);


// Another Question
// $("img").click(function (){
//     $(this).attr("src", "img/photo-1.jpeg");
//     $("this").attr("alt", "resistance is futile");
// });

// Another Question
// $('#submitBtn').click(function (){
//     // window.location.replace("https://www.google.com/"); // for new page url
//     location.reload(); // for reload page
// })
//

