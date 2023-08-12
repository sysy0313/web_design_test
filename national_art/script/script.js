// js
jQuery(document).ready(function(){
    // 서브 숨기기
    $('.sub').hide();
    // 펼치기, 숨기기
    $('#menu > li').mouseover(function(){
        $(this).find('.sub').stop().slideDown(500)
    }).mouseout(function(){
        $(this).find('.sub').stop().slideUp(500)
    })
    //탭구조
    // 갤러리 숨기기
    $('.gallery').hide();
    // 갤러리 클릭 시 갤러리 보이기
    $('.tab2').click(function(){
        $('.notice').hide();
        $('.gallery').show();
        $('.tab1').removeClass('active')
        $('.tab2').addClass('active')
    })
    // 공지사항 클릭 시 갤러리 보이기
    $('.tab1').click(function(){
        $('.gallery').hide();
        $('.notice').show();
        $('.tab2').removeClass('active')
        $('.tab1').addClass('active')
    })
    //layer 
    // 숨기기
    $('#layer').hide();
    // 첫번째 게시글 클릭 시 오픈
    $('.notice li:first-child').click(function(){
        $('#layer').show();
    })
    // 다시 숨기기
    $('#close').click(function(){
        $('#layer').hide();
    })
    // 슬라이드
    var num = 0;
    var result;
    setInterval(function(){
        if(num ==3){num=0}
        result = num*300
        console.log(num)
        $('.slide_list').animate({
            bottom:result
        })
        num++
    },3000)
})