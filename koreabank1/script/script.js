// js
jQuery(document).ready(function(){
    //서브메뉴
    $('.menu > li').mouseover(function(){
        $('.sub').stop().slideDown(500);
    }).mouseout(function(){
        $('.sub').stop().slideUp(500);
    })
    //슬라이드
    setInterval(function(){
        $('.slide_list').delay(2000);
        $('.slide_list').animate({marginLeft: - 1200});
        $('.slide_list').delay(2000);
        $('.slide_list').animate({marginLeft: - 2400});
        $('.slide_list').delay(2000);
        $('.slide_list').animate({marginLeft:0})
        $('.slide_list').delay(2000);
    });
    //tab
    $('.gallery').hide();
    $('.tab1').click(function(){
        $('.notice').show();
        $('.gallery').hide();
        $('.tab2').removeClass('active')
        $(this).addClass('active')
    })
    $('.tab2').click(function(){
        $('.notice').hide();
        $('.gallery').show();
        $('.tab1').removeClass('active')
        $(this).addClass('active')
    })
    //팝업
    $('#layer').hide();
    $('.notice ul li:first-child a').click(function(){
        $('#layer').show();
    })
    $('#close').click(function(){
        $('#layer').hide();
    })
})