
var key, value;
  
function getParams() {

// 현재 페이지의 url   sub1_2.html?num=1
var url = decodeURIComponent(location.href);
// url이 encodeURIComponent 로 인코딩 되었을때는 다시 디코딩 해준다.
url = decodeURIComponent(url);  
//  'sub1_2.html?num=1'

var params='';
// url에서 '?' 문자 이후의 파라미터 문자열까지 자르기
params = url.substring( url.indexOf('?')+1, url.length );   
// 'abcdefg'.substring(2,4);=> 'cdef'
// params = "num=1" 

key = params.split("=")[0];  //'num'
value = params.split("=")[1];  // '1'

value = Number(value);  //   value=1;
}
    
getParams();  //함수호출





var xhr = new XMLHttpRequest();                 // XMLHttpRequest 객체를 생성한다.
var responseObject;
var newContent='';

xhr.onload = function() {                       // When readystate changes
 
    responseObject = JSON.parse(xhr.responseText);  //서버로 부터 전달된 json 데이터를 responseText 속성을 통해 가져올 수 있다.
	                                                 // parse() 메소드를 호출하여 자바스크립트 객체로 변환한다.
    if(value){

        var posit = 0;  
            
        if(value==1){
            posit = $('#medicine').offset().top -130 ;
        }else if(value==2){
            posit = $('#drink').offset().top -130 ;
        }else if(value==3){
            posit = $('#distribution').offset().top -130 ;
        }else if(value==4){
            posit = $('#Materials').offset().top -130 ;
        }
        $("html,body").stop().animate({"scrollTop":posit},1000); 
    
    
        $('.modal_box2').fadeIn('fast');
        $('.popup_card').fadeIn('slow');
    
            newContent='';
            newContent+='<img src="./images/content2/'+responseObject.info[value-1].path+'" alt="">';
            newContent+='<dl>';
            newContent+='<dt>'+responseObject.info[value-1].title+'</dt>';
            newContent+='<dd>'+responseObject.info[value-1].discript+'</dd>';
            newContent+='</dl>';
    
            $('.card_int').html(newContent);
    }                                                 
};

xhr.open('GET', './js/popup.json', true);        // 요청을 준비한다.
xhr.send(null);                                 // 요청을 전송한다


//제휴카드모달




 

  $('.info .more').click(function(e){
      e.preventDefault();

      var ind = $(this).index('.info .more'); // 0~3
      //console.log(ind);

      $('.modal_box2').fadeIn('fast');
      $('.popup_card').fadeIn('slow');

      newContent='';
      newContent+='<img src="./images/content2/'+responseObject.info[ind].path+'" alt="">';
      newContent+='<dl>';
      newContent+='<dt>'+responseObject.info[ind].title+'</dt>';
      newContent+='<dd>'+responseObject.info[ind].discript+'</dd>';
      newContent+='</dl>';

      $('.card_int').html(newContent);
      //console.log(responseObject); 
  });

 

  $('.close_btn2, .modal_box2').click(function(e){
      e.preventDefault();
      $('.modal_box2').hide();
      $('.popup_card').hide();

  });

