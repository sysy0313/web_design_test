jQuery(document).ready(function(){
    //서브, bg 숨기기
    $('.sub').hide();
    $('.sub_bg').hide();
    $('#menu > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500)
        $('.sub_bg').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500)
        $('.sub_bg').stop().slideUp(500)
    })
    // 슬라이드
    $('#slide a:gt(0)').hide();
    setInterval(function(){
        $('#slide a:first-child')
        .fadeOut()
        .next('a')
        .fadeIn()
        .end()
        .appendTo('.slide_list')
    },3000)
    // 탭구조
    $('.gallery').hide()
    $('.tab_gallery').click(function(){
        $('.notice').hide();
        $('.gallery').show();
        $(this).addClass('active')
        $('.tab_notice').removeClass('active')
    })
    $('.tab_notice').click(function(){
        $('.notice').show();
        $('.gallery').hide();
        $(this).addClass('active')
        $('.tab_gallery').removeClass('active')
    })
    //layer
    $('#layer').hide();
    $('.notice li:first-child').click(function(){
        $('#layer').show();
    })
    $('.close').click(function(){
        $('#layer').hide();
    })
    
})