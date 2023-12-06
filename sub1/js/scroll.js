
    $('.year_menu li:eq(0)').find('a').addClass('spy');
    //첫번째 서브메뉴 활성화
    
    $('#content div:eq(0)').addClass('boxMove');
    //첫번째 내용글 애니메이션 처리
    // var smh= $('.content_area').height();  //메인 비주얼의 높이
    // var h1= $('#content div:eq(1)').offset().top-600 ;
    // var h2= $('#content div:eq(2)').offset().top-600 ;
    // var h3= $('#content div:eq(3)').offset().top-600 ;
    // var h3= $('#content div:eq(4)').offset().top-600 ;
    // var h3= $('#content div:eq(5)').offset().top-600 ;


    //스크롤의 좌표가 변하면.. 스크롤 이벤트
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        //스크롤top의 좌표를 담는다
       
    
        //스크롤 좌표의 값을 찍는다.
        
        //sticky menu 처리 //smh에 값 직접입력해도 됨.
        if(scroll>926){ 
            $('.navBox').addClass('navOn');
            //스크롤의 거리가 350px 이상이면 서브메뉴 고정
            $('header').hide();
        }else{
            $('.navBox').removeClass('navOn');
            //스크롤의 거리가 350px 보다 작으면 서브메뉴 원래 상태로
            $('header').show();
        }
    // 여기까지 스크롤 이벤트
        
        $('.year_menu li').find('a').removeClass('spy');
        //모든 서브메뉴 비활성화~ 불꺼!!!
        

         //스크롤의 거리의 범위를 처리
        if(scroll>=960 && scroll<2116){
            $('.year_menu li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=2116 && scroll<3955){
            $('.year_menu li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove2');
        }else if(scroll>=3955 && scroll<4906){
            $('.year_menu li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove3');
        }else if(scroll>=4906 && scroll<5838){
            $('.year_menu li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화

            $('#content div:eq(3)').addClass('boxMove4');
        }else if(scroll>=5838){
            $('.year_menu li:eq(4)').find('a').addClass('spy');
            //다섯번째 서브메뉴 활성화
            
             $('#content div:eq(5)').addClass('boxMove5');
        }
        

         $('.slideMenu a').click(function(e){
            e.preventDefault(); //href="#" 속성을 막아주는..메소드
       
             var value=0; //이동할 스크롤의 거리

             if($(this).hasClass('link1')){   //첫번째 메뉴를 클릭했냐?   if($(this).is('#link1')){
                value= $('#content .con1').offset().top;  // 해당 콘테츠의 상단의 거리~~ offset().top;<<쌍으로 외우기. 스크롤 간격을 알려줍니당.
             }else if($(this).hasClass('link2')){
                value= $('#content .con2').offset().top; 
             }else if($(this).hasClass('link3')){
                value= $('#content .con3').offset().top; 
             }else if($(this).hasClass('link4')){
                value= $('#content .con4').offset().top; 
             } else if($(this).hasClass('link5')){
                value= $('#content .con5').offset().top; 
             }
             
             value-=100;

           $("html,body").stop().animate({"scrollTop":value},1000);
         });
        
        
        
     /*   
        //스크롤의 거리의 범위를 처리
        if(scroll>=0 && scroll<500){
            $('.subNav li:eq(0)').find('a').addClass('spy');
            //첫번째 서브메뉴 활성화
            
            $('#content div:eq(0)').addClass('boxMove');
            //첫번째 내용 콘텐츠 애니메이
        }else if(scroll>=500 && scroll<1100){
            $('.subNav li:eq(1)').find('a').addClass('spy');
            //두번째 서브메뉴 활성화
            
             $('#content div:eq(1)').addClass('boxMove');
        }else if(scroll>=1100 && scroll<1500){
            $('.subNav li:eq(2)').find('a').addClass('spy');
            //세번째 서브메뉴 활성화
            
             $('#content div:eq(2)').addClass('boxMove');
        }else if(scroll>=1500){
            $('.subNav li:eq(3)').find('a').addClass('spy');
            //네번째 서브메뉴 활성화
            
             $('#content div:eq(3)').addClass('boxMove');
        }
        
    */    
        
    });
