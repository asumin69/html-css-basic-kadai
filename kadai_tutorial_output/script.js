$(function() {
    $('.button-more').on('mouseover',function (){
        $(this).animate({
            opacity: 0.5,
            marginLeft: 20,
        },100);
    });

    $('.button-more').on('mouseout',function(){
        $(this).animate({
            opacity: 1.0,
            marginLeft: 0,
        },100);
    });

    //カルーセル
    $('.carousel').slick({
        autoplay: true,
        dots: true,
        infinite: true,
        autoplaySpeed: 5000,
        arrows: false,
    });

    //お問い合わせフォームの入力チェック
    $('#submit').on('click',function(event) {
        console.log('クリックしました');

        event.preventDefault();

        let result = inputCheck();


        let error = result.error;
        let message = result.message;

        if (error == false) {
            console.log('クリックしました');
            $.ajax({
                url: 'https://api.staticforms.xyz/submit',
                type: 'POST',
                dataType: 'json',
                data: $('#form').serialize(),
                success: function (result) {
                    alert('お問い合わせを送信しました。')
                },
                error: function(xhr, resp, text) {
                    alert('お問い合わせを送信できませんでした。')
                }
            })
        }
        else {
            alert(message);
        }
    });

    $('#name').blur(function(){
        inputCheck();
    });

    $('#furigana').blur(function(){
        inputCheck();
    });

    $('#email').blur(function(){
        inputCheck();
    });

    $('#tel').blur(function(){
        inputCheck();
    });

    $('#message').blur(function(){
        inputCheck();
    });

    $('#agree').click(function(){
        inputCheck();
    });

    function inputCheck() {
        let result;

        let message = '';

        let error = false;

        //名前
        if ($('#name').val() == '' ) {
            $('#name').css('background-color', '#f79999');
            error = true;
            message += 'お名前を入力してください。 \n';
        }
        else {
            $('#name').css('background-color', '#fafafa');
        }

        //フリガナ
        if ($('#furigana').val() == ''){
            $('#furigana').css('background-color', '#f79999');
            error = true;
            message += 'フリガナを入力してください。 \n';
        }
        else {
            $('#furigana').css('background-color', '#fafafa');
        }

        //問い合わせ内容
        if($('#message').val() == ''){
            $('#message').css('background-color', '#f79999');
            error = true;
            message += 'お問い合わせ内容を入力してください。 \n';
        }
        else {
            $('#message').css('background-color', '#fafafa');
        }

        //メールアドレス
        if ($('email').val() == '' || $('#email').val().indexOf('@')  == -1  || $('#email').val().indexOf('.') == -1) {
            $('#email').css('background-color', '#f79999');
            error = true;
            message += 'メールアドレスが未記入、または「@」「.」が含まれていません。 \n';
        }
        else {
            $('#email').css('background-color', '#fafafa');
        }

        //tel
        if($('#tel').val()!= '' && $('#tel').val().indexOf('-') == -1){
            $('#tel').css('background-color', '#f79999');
            error= true;
            message += '電話番号に「-」が含まれていません。 \n';
        }
        else {
            $('#tel').css('background-color', '#fafafa');
        }

        //個人情報
        if ($('#agree').prop('checked') == false) {
            error = true;
            message += '個人情報の取り扱いについてご同意いただける場合は、チェックボックスにチェックしてください。 \n';
        }

        //都道府県
        if ($('#prefecture').val() == '') {
            $('#prefecture').css('background-color', '#f79999');
            error = true;
            message = '都道府県を選択してください。 \n';
        }
        else {
            $('#prefecture').css('background-color', '#fafafa');
        }

        //エラーの有無で送信ボタン切り替え
        if(error == true) {
            $('#submit').attr('src', 'images/button-submit.png');
        }
        else {
            $('#submit').attr('src', 'images/button-submit-blue.png');
        }

        // オブジェクトでエラー判定とメッセージを返す
        result = {
            error: error,
            message: message
        }
        // 戻り値としてエラーがあるかどうかを返す
        return result;
    }
});