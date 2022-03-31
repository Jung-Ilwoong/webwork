$(function(){
    //  총을 클릭하면 0~11사이의 랜덤값을 발생
    //  해당 인형을 안보이게 처리
    //  메세지 창에 1번째 인형을 맞췄내요
    //  1번이 이미 사라지고 없는경우
    //  "1번 인형은 이미 처리되었습니다.""
    //  12개의 인형이 모두 사라지면 "You Win!!Game over"""

    var n=0;    //  맞춘 인형 갯수
    
    $(".gun").click(function(){
  
        //  ceil : 무조건 올림 / floor : 무조건 내림 / round : 반올림
        var idx = parseInt(Math.random()*12);   //    0~11
        if ($(".sunban li img").eq(idx).is(":hidden")){
            $("#msg").html((idx+1)+"번 인형은 이미 처리되었습니다.");
        } else {
            n++;    //  새로운 인형을 맞출때마다 1 증가
            $("#msg").html((idx+1)+"번째 인형을 맞췄네요!!");
             $(".sunban li img").eq(idx).hide();
            // $(".sunban li img").eq(idx).fadeOut('slow');
        }

        if (n>=12){
            $("#msg").html("Game over!! You Win!!");
        }
    });

    //  money를 클릭하면 모두 초기화(사라진 인형 재배치, 메세지창 지우기등)후 해당 지폐를 안보이게
    $(".money img").click(function(){
        // $(this).hide();  //  자리를 차지하지 않음
        // $(this).css("opacity", "0");     //  투명도0, 자리를 차지함
        $(this).css("visibility", "hidden");
        n=0;
        $(".sunban li img").show();
        $("#msg").html("");
    });
});