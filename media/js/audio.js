$(document).ready(function() {
    var audio=document.getElementById('main_audio');
    var currnum = 1;  //현재 선택된 사운드 순서
    var ps=false; //false(stop), true(play)

    function changeSound(num){
         $('#main_audio').attr('src','./music/music'+num+'.mp3');
         audio.play();
         $('.playerImg img').addClass("current");
         $('#controlPlay i').removeClass().addClass('fa-solid fa-stop'); //stop 버튼으로 바뀐다.

         $('.playInfo li a').removeClass('curr');
         $('.playInfo li:eq('+(num-1)+') a').addClass('curr'); //클릭한 리스트만 활성화 시킨다.
         currnum = num;
         ps=true; //현재 재생 중이다

         var ran = Math.floor(Math.random()*4)+1;  //0*4~1*4 -> 0~4 +1
         $('.playerImg img').attr('src','./images/album'+ran+'.jpg');
    }

    $('#controlPlay').click(function(e){ //재생 정지기능
        e.preventDefault();

        if(ps==false){ //중지중이면
            audio.play();
            $('.playerImg img').addClass("current");
            $('#controlPlay i').removeClass().addClass('fa-solid fa-stop');
            ps=true;
        }else{  //재생중이면 true라면
            audio.pause();
            $('.playerImg img').removeClass("current");
            $('#controlPlay i').removeClass().addClass('fa-solid fa-play');
            ps=false;
        }
    });

    
    function np_play(){ //재생기능
        $('.playerImg img').addClass("current");

        $('.playInfo li a').removeClass('curr'); //다른 리스트는 비활성화
        $('.playInfo li:eq('+(currnum-1)+') a').addClass('curr');//현재 리스트만 활성화

        $('#controlPlay i').removeClass().addClass('fa-solid fa-stop'); //중지 버튼 모양 변경
        ps=true;

        $('#main_audio').attr('src','./music/music'+currnum+'.mp3');
        audio.play();
    }

   $('#controlNext').click(function(e){  //다음버튼 클릭시
        e.preventDefault();

        currnum++; // 1 2 3 4
        if(currnum==5)currnum=1;
        np_play(); //재생한다
    });


    $('#controlPrev').click(function(e){ //이전버튼 클릭시
        e.preventDefault();

        currnum--; // 4 3 2 1
        if(currnum==0)currnum=4;
        np_play();//재생한다
    });
  });