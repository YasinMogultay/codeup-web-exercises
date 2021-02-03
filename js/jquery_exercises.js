
$(document).ready(function (){

    //1) Id selectors part of exercise

    // alert($('#header-1').html())
    //using same id on the elements and alert them, Jquery alerting only the first one

    //2) Class selectors part of exercise

    // $('.codeup').css('border', '1px solid #F00');
    // when you delete codeup class its no longer bordered and
    // when you give id codeup another element its not changing cause we selecting class codeup

    //3) Element selectors part of exercise

    // $('li').css('font-size', '20px');
    // $('li').css('background', 'yellow');
    // $('h1').css('background', 'yellow');
    // $('p').css('background', 'yellow');
    // alert($('h1').text());

    // $('h1').each(function (){
        // alert($(this).html());
    // }) ;


    //4) Multiple selectors part of exercise
    // $('li, p, h1').css('background', 'yellow');



    // Mouse Events exercises
    //Q2
    var h1Elements = $('h1');
    var handler = function(){
        $(this).css('background', 'yellow');
    };
    h1Elements.click(handler);

    //Q3
    var pElements = $('p');

    var handler1 = function (){
        $(this).css('fontSize', '18px');
    };
    pElements.dblclick(handler1);

    //Q4
    var liElements = $('ul > li');

    var handler3 = function (){
        $(this).css({backgroundColor: 'red',
        transition: '.5s'});
    };
    var handler4 = function (){
        $(this).css({backgroundColor: '',
            transition: '5s'});
    };
    liElements.hover(handler3, handler4);
});



