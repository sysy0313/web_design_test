// js
jQuery(document).ready(function(){
    // 팝업 숨기기
    $('#modal').hide();
    // 팝업 나타내기
    $('.con1 li:first-child').click(function(){
        $('#modal').show();
    })
    $('#close').click(function(){
        $('#modal').hide();
    })
    // 서브메뉴 숨기기
    $('.sub').hide();
    $('#menu > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500)
    })
    // 슬라이드
    var num = 0;
    var result;
    setInterval(function(){
        $('.slide_list').delay(2000)
        $('.slide_list').animate({left:-800})
        $('.slide_list').delay(2000)
        $('.slide_list').animate({left:-1600})
        $('.slide_list').delay(2000)
        $('.slide_list').animate({left:-0})
    })
})