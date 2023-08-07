//JavaScript Document
jQuery(document).ready(function(){
    //서브메뉴
    $('#gnb > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500)
    })
    //슬라이드
    $('.image_slide a:gt(0)').hide();
    setInterval(function(){
        $('.image_slide a:first-child')
            .fadeOut(1000)
            .next('a')
            .fadeIn(1000)
            .end()
            .appendTo('.image_slide');
    }, 3000);
    //모달
    $('.notice li:first-child').click(function(){
        $('#modal').addClass('active');
    });
    $('.btn').click(function(){
        $('#modal').removeClass('active');
    })

})//제이쿼리 끝