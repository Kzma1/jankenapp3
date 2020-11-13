    var pika;
    document.write( '<img id="enemy" src="./img/enemy.png" alt="">' );
    document.write( '<img id="pika" src="./img/pika.png" alt="">' );
    document.write( '<img id="iwa1" src="./img/iwa.png" alt="">' );
    document.write( '<img id="iwa2" src="./img/iwa.png" alt="">' );
    document.write( '<img id="iwa3" src="./img/iwa.png" alt="">' );
    document.write( '<img id="iwa4" src="./img/iwa.png" alt="">' );


    var x = 0;
    var y = 0;

    // あたり判定
    function hitcheck(){
        if((pika['left'] == 256) && (pika['top'] == 288)) {
          next();
        }
    }

    // なにかキーが押されたとき、keydownfuncという関数を呼び出す
    addEventListener( "keydown", keydownfunc );

    // キーが押されたときに呼び出される関数
    function keydownfunc( event ) {
        // 押されたボタンに割り当てられた数値（すうち）を、key_codeに代入
        var key_code = event.keyCode;

        if( key_code === 37 ) x -= 32;		//「左ボタン」が押されたとき、xの値から32を引き算する
        if( key_code === 38 ) y -= 32;		//「上ボタン」が押されたとき、yの値から32を引き算する
        if( key_code === 39 ) x += 32;		//「右ボタン」が押されたとき、xの値に32を足し算する
        if( key_code === 40 ) y += 32;		//「下ボタン」が押されたとき、yの値に32を足し算する

        // 画像の位置（いち）を反映（はんえい）させる
        document.getElementById( 'pika' ).style.top = y + "px";
        document.getElementById( 'pika' ).style.left = x + "px";

        pika = { left: x, top: y }; 
        hitcheck();
    }
    // オーバーレイの表示
    function next () {
        $("#overlay, #overlayWindow").fadeIn();
    }
    
    // パスワード入力画面
    function myEnter(){
        myPassWord = prompt( "合言葉を入力してください", "" );
        if ( myPassWord == "ジーズ"){
            location.href = "./index.html";
        }
    }
        