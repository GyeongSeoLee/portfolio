
    $('.bussiness ul li a').mouseenter(function(e){
        e.preventDefault();

        var ind2 = $(this).index('.bussiness ul li a'); // 0 1 2 3
        $('.bussiness .hover_img img').attr('src','./images/bussiness'+ (ind2+1) +'.jpg');
   
    });
  