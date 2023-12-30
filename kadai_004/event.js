$(function() {
    console.log('loadイベントが発生しました');

    $(window).on('scroll', ()=> {
        console.log('scrollイベントが発生しました');
    });
});