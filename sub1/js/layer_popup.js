 $(document).ready(function(){
     
      $('.openBtn').on('click', function(e){
          e.preventDefault();
          
          $(this).next('.big').fadeIn('slow');
          $('.info').show();
      });
     
     $('.closeBtn, .info').on('click', function(e){
          e.preventDefault();

          $('.big').fadeOut('fast');
          $('.info').hide();
     });
 });

