// js
jQuery(document).ready(function(){
    //서브메뉴
    $('#gnb>li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500);
    })
    //슬라이드
    $('slide a:gt(0)').hide();
    setInterval(function(){
        $('.slide a:first-child')
        .fadeOut(1000)
        .next('a')
        .fadeIn(1000)
        .end()
        .appendTo('.slide')
    }, 3000);
    //팝업
    $('.notice li:first-child').click(function(){
        $('#modal').addClass('active');
    });
    $('.close').click(function(){
        $('#modal').removeClass('active');
    })

})//제이쿼리끝