
$(document).ready(function (){

    //1) Id selectors part of exercise

    // alert($('#header-1').html())
    // alert(content);
    //using same id on the elements and alert them, Jquery alerting only the first one

    //2) Class selectors part of exercise

    // $('.codeup').css('border', '1px solid #F00');
    // when you delete codeup class its no longer bordered and
    // when you give id codeup another element its not changing cause we selecting class codeup

    //3) Element selectors part of exercise

    $('li').css('font-size', '20px');
    // $('li').css('background', 'yellow');
    // $('h1').css('background', 'yellow');
    // $('p').css('background', 'yellow');
    var h1Content = $('h1').text();
    alert(h1Content);

    //4) Multiple selectors part of exercise
    $('li, p, h1').css('background', 'yellow');
});

