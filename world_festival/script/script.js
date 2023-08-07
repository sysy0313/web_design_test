
jQuery(document).ready(function(){
    // 서브메뉴 open
    $('#menu >li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500);
    });
    // 이미지슬라이드
    $('.slide a:gt(0)').hide();
    setInterval(function(){
        $('.slide a:first-child')
        .fadeOut (1000)
        .next('a')
        .fadeIn (1000)
        .end()
        .appendTo ('.slide');
    },3000);
    // 레이어팝업
    $('.notice li:first').click(function(){
        $('#modal').addClass("active");
    });
    $('.btn').click(function(){
        $('#modal').removeClass("active");
    })

});
