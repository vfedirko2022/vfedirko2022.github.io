$(document).ready(function() {
    new WOW().init();
    $('.header__burger').click(function(event) {
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    })
});

// установливаем обработчик события resize
$( window ).resize(function() {

    $("#bgWoodBlcok").height($( window ).height() - 84);
    var widthWood = $("#bgWood").width();
    $("#bgWoodBlcok").width(widthWood);

    if($( window ).width() <= 600) {
        $("#bgWoodBlcok").width(0)
    }


    var widthLessontItem = $(".wrapper-lesson__item").width();
    $(".wrapper-lesson__item").height(widthLessontItem);
    
  });
  
  // вызовем событие resize
  $(window).resize();

