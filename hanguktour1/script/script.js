// js
jQuery(document).ready(function(){
    // 서브메뉴
    // 1. 숨기기
    $('#sub').hide()
    // 2. 메뉴 보이기, 접기
    $('nav').mouseover(function(){
        $('#sub').stop().slideDown(500)
    }).mouseout(function(){
        $('#sub').stop().slideUp(500)
    })
    // 3. 선택되었을 때 상위 메뉴 하이라이트
    $('#sub ul').mouseover(function(){
        var index = $(this).index();
        $('#menu li').eq(index).find('a').css('background', 'blue')
    }).mouseout(function(){
        $('#menu li a').css('background', 'teal')
    })
    //각각 상위 메뉴 색상변경
    $('#menu li a').mouseover(function(){
        $(this).css('background', 'blue')
    }).mouseout(function(){
        $(this).css('background', 'teal')
    })
    // 서브 하이라이트
    $('#sub a').mouseover(function(){
        $(this).css('background', 'pink')
    }).mouseout(function(){
        $(this).css('background', 'lightgreen')
    })
    //슬라이드
    var num = 0;
    setInterval(function(){
        num++
        if(num ==2){num = 0};
        $('.slide_con').hide();
        $('.slide_con').eq(-num).stop().fadeOut();
        $('.slide_con').eq(num).stop().fadeIn();
    },3000)
    // 모달
    $('#modal').hide();
    // 클릭 시 오픈
    $('.con1 li:first-child').click(function(){
        $('#modal').show();
    })
    $('#close').click(function(){
        $('#modal').hide();
    })
})