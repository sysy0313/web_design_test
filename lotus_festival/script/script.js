// js
jQuery(document).ready(function(){
    //layer
    $('#layer').hide();
    $('.notice li:first-child').click(function(){
        $('#layer').show();
    })
    $('.close').click(function(){
        $('#layer').hide();
    })
    // sub
    $('.sub').hide();
    $('#menu > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500)
    })
    // slide
    $('#slide a:gt(0)').hide();
    setInterval(function(){
        $('#slide a:first-child')
        .fadeOut()
        .next('a')
        .fadeIn()
        .end()
        .appendTo('.slide_list')
    },3000)
})