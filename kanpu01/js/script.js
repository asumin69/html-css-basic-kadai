$(function() {
$('.slide-items').slick({
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    dots: true
});

//ホバー時
$('a').on('mouseover', function() {
    $(this).animate({
        opacity: 0.5,
    },100);
});
$('a').on('mouseout', function() {
    $(this).animate({
        opacity: 1.0,
    },100);
});


//スクロールしたらメニューボタン
$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
});

$(window).on('load scroll', function(){
if($(this).scrollTop() > 1) {
    $('#page-top').addClass('show');
}else{
    $('#page-top').removeClass('show');
}
//スクロール滑らか
$('a[href^="#"]').click(function () {
  const speed = 600;
  let href = $(this).attr("href");
  let target = $(href == "#" || href == "" ? "html" : href);
  let position = target.offset().top;
  $("body,html").animate({ scrollTop: position }, speed, "swing");
  return false;
  });


  //フェードイン
  $(window).scroll(function (){
    $('.js-fade').each(function(){
      let pos = $(this).offset().top;
      let scroll = $(window).scrollTop();
      let windowHeight = $(window).height();
      if (scroll > pos - windowHeight + 100){
        $(this).addClass('scroll');
      }
      else {
        $(this).removeClass('scroll');
      }
    });
  });

  //モーダル
  $('#works img').click(function () {
    const imgSrc = $(this).attr('src');
    $('.big-img').attr('src', imgSrc);
    $('.modal').fadeIn();
    return false
  });

  // 閉じるボタンをクリックしたときにモーダルを閉じる
  $('.close-btn').click(function () {
    $('.modal').fadeOut();
    return false
  });

});

