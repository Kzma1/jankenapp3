$(function () {
    $(".hide").hide();
    let num = 0;
    let winCount = 0;
    let random = 0;
    let answerSpeed = 0;
    // ランダム数の設定
    const getRandom = () => {
        random = Math.floor(Math.random() * 3);
    }

    // クリック回数カウント
    let click = 0;
    const countClick = () => {
        $(this).data("click", ++num);
        click = $(this).data("click");
    }

    // 相手の手を決める・1回目
    $("#firstbutton").click(function(){
        countClick()
        
        if (click <= 1){
            getRandom();
            const images = $(".randomHand");
            let imageIndex = -1;
            function showNextimage() {
                imageIndex++;
                images.eq(imageIndex % images.length).fadeIn(20).delay(30).fadeOut(20, showNextimage);
            }
            showNextimage();
            PassSec = 0;
            PassageID = setInterval(count, 1000);
            startBar();
        }
        if(click == 2){
            $(".randomHand").stop(true, false);
            document.getElementById("button1").disabled = true;
            if (random == 0){
                $(".randomgu").show().attr('src', './img/gu.png').css("opacity",1);
            } else if (random == 1){
                $(".randomgu").show().attr('src', './img/cho.png').css("opacity",1);
            } else if (random == 2){
                $(".randomgu").show().attr('src', './img/pa.png').css("opacity",1);
            } 
            $(".randomcho").hide()
            $(".randompa").hide()
        }
    });
    // 自分の手を決める
    $(".gu_btn").on("click", function(){
        if (click == 2) {
            if(random == 0 ){
                $(".pc1").text("・1回目：グー／あいこ（失敗）");
            }else if(random == 1 ){
                $(".pc1").text("・1回目：チョキ／勝ち（失敗）");
            }else if(random == 2 ){
                $(".pc1").text("・1回目：パー／負け（成功）");
                winCount++;
            }
            $("#secondbutton").show()
            answerSpeed += PassSec;
        } else if (click == 4) {
            if(random == 0 ){
                $(".pc2").text("・2回目：グー／あいこ（失敗）");
            }else if(random == 1 ){
                $(".pc2").text("・2回目：チョキ／勝ち（失敗）");
            }else if(random == 2 ){
                $(".pc2").text("・2回目：パー／負け（成功）");
                winCount++;  
            }
            $("#thirdbutton").show()
            answerSpeed += PassSec;
        } else if (click == 6) {
            if(random == 0 ){
                $(".pc3").text("・3回目：グー／あいこ（失敗）");
            }else if(random == 1 ){
                $(".pc3").text("・3回目：チョキ／勝ち（失敗）");
            }else if(random == 2 ){
                $(".pc3").text("・3回目：パー／負け（成功）");
                winCount++;  
            }
            $(".resultPage").show();
            answerSpeed += PassSec;
            clearInterval( intervalID );   // タイマーのクリア

        }
    });

    $(".cho_btn").on("click", function(){
        if (click ==2) {
            if( random == 0 ){
                $(".pc1").text("・1回目：グー／負け（成功）");
                winCount++;  
            }else if( random == 1 ){
                $(".pc1").text("・1回目：チョキ／あいこ（失敗）");
            }else if( random == 2 ){
                $(".pc1").text("・1回目：パー／勝ち（失敗）");
            }
            $("#secondbutton").show()
            answerSpeed += PassSec;
        } else if (click == 4) {
            if( random == 0 ){
                $(".pc2").text("・2回目：グー／負け（成功）");
                winCount++;  
            }else if( random == 1 ){
                $(".pc2").text("・2回目：チョキ／あいこ（失敗）");
            }else if( random == 2 ){
                $(".pc2").text("・2回目：パー／勝ち（失敗）");
            }
            $("#thirdbutton").show()
            answerSpeed += PassSec;
        } else if (click == 6) {
            if( random == 0 ){
                $(".pc3").text("・3回目：グー／負け（成功）");
                winCount++;  
            }else if( random == 1 ){
                $(".pc3").text("・3回目：チョキ／あいこ（失敗）");
            }else if( random == 2 ){
                $(".pc3").text("・3回目：パー／勝ち（失敗）");
            }
            $(".resultPage").show();
            answerSpeed += PassSec;
            clearInterval( intervalID );
        }
    })

    $(".par_btn").on("click", function(){
        if (click ==2) {
            if(random == 0){
                $(".pc1").text("・1回目：グー／勝ち（失敗）");
            }else if(random == 1){
                $(".pc1").text("・1回目：チョキ／負け（成功）");
                winCount++;  
            }else if(random == 2){
                $(".pc1").text("・1回目：パー／あいこ（失敗）");
            }
            $("#secondbutton").show()
            answerSpeed += PassSec;
        } else if (click == 4) {
            if(random == 0){
                $(".pc2").text("・2回目：グー／勝ち（失敗）");
            }else if(random == 1){
                $(".pc2").text("・2回目：チョキ／負け（成功）");
                winCount++;  
            }else if(random == 2){
                $(".pc2").text("・2回目：パー／あいこ（失敗）");
            }
            $("#thirdbutton").show()
            answerSpeed += PassSec;
        } else if (click == 6) {
            if(random == 0){
                $(".pc3").text("・3回目：グー／勝ち（失敗）");
            }else if(random == 1){
                $(".pc3").text("・3回目：チョキ／負け（成功）");
                winCount++;  
            }else if(random == 2){
                $(".pc3").text("・3回目：パー／あいこ（失敗）");
            }
            $(".resultPage").show();
            answerSpeed += PassSec;
            clearInterval( intervalID );   // タイマーのクリア
        }
    })
    
    // 相手の手を決める・2回目
    $("#secondbutton").click(function(){
    countClick()

        if (click == 3){
            getRandom();
            const images = $(".randomHand");
            let imageIndex = -1;
            function showNextimage() {
                imageIndex++;
                images.eq(imageIndex % images.length).fadeIn(20).delay(30).fadeOut(20, showNextimage);
            }
            showNextimage();
            PassSec = 0;
            PassageID = setInterval(count, 1000);
        }
        if(click === 4){
            $(".randomHand").stop(true, false);
            document.getElementById("button2").disabled = true;
            if (random == 0){
                $(".randomgu").show().attr('src', './img/gu.png').css("opacity",1);
            } else if (random == 1){
                $(".randomgu").show().attr('src', './img/cho.png').css("opacity",1);
            } else if (random == 2){
                $(".randomgu").show().attr('src', './img/pa.png').css("opacity",1);
            } 
            $(".randomcho").hide()
            $(".randompa").hide()
        }       
    });

    // 相手の手を決める・3回目
    $("#thirdbutton").click(function(){
    countClick()

        if (click == 5){
            getRandom();
            const images = $(".randomHand");
            let imageIndex = -1;
            function showNextimage() {
                imageIndex++;
                images.eq(imageIndex % images.length).fadeIn(20).delay(30).fadeOut(20, showNextimage);
            }
            showNextimage();
            PassSec = 0;
            PassageID = setInterval(count, 1000);
        }
        if(click == 6){
            $(".randomHand").stop(true, false);
            document.getElementById("button3").disabled = true;
            if (random == 0){
                $(".randomgu").show().attr('src', './img/gu.png').css("opacity",1);
            } else if (random == 1){
                $(".randomgu").show().attr('src', './img/cho.png').css("opacity",1);
            } else if (random == 2){
                $(".randomgu").show().attr('src', './img/pa.png').css("opacity",1);
            } 
            $(".randomcho").hide()
            $(".randompa").hide()
        }     
    });

    // 結果発表
    $('.resultPage').on('click', function() {
        const answerAverage = Math.floor(answerSpeed / 3 * 10) / 10
        console.log(answerAverage)
        console.log(winCount)
        $(".resultMessage").text("成功回数は、" + winCount + "回です")
        $(".resultMessage2").text("平均回答スピードは、"+ answerAverage + "秒です");
        $("#overlay, #overlayWindow").fadeIn();
    });
    
    $('#button2').on('click', function() {
        $("#overlay, #overlayWindow").fadeOut();
    });
        
    // タイマー表示
    let PassSec;
    let PassageID
 
    // 繰り返し処理の中身
    const count = function () {
       PassSec++; // カウントアップ   // 表示更新
       const msg = "経過時間：" + PassSec + "秒";   // 表示文作成
       $("#PassageArea").text(msg);
    }

    // 繰り返し処理の中止
    $(".timer_stopbutton").click(function() {
        clearInterval( PassageID );   // タイマーのクリア
    })
    
    var val;
    // 一定間隔で処理を行うintervalのIDを保持
    var intervalID;

    // ボタンを押した時に動く関数
    const startBar = () => {
        val = 0;
        // 50msおきにプログレスバーを更新する
        intervalID = setInterval(updatebar, 100);
    }

    // プログレスバーを更新する
    const updatebar = function () {
        // プログレスバーの進捗値を更新し、プログレスバーに反映させる
        val += 1;
        document.getElementById("myProgress").value = val;
        document.getElementById("myProgress").innerText = val + "%";
        console.log("progress:", val, "%");

        // 最大値まで達したら終了
        if (val == 100) {
        clearInterval(intervalID);
        $(".gameover").fadeIn(1000)
        }
    }

    $(".replay").on("click", function(){
        location.href = "./index.html";
    })

});