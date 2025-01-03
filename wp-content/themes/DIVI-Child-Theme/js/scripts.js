//Place your JavaScript of jQuery snippets here. Remember to remove the <script> tags
  
$(document).load(function(){
    $('.custom-accordion .sec1 .sec-num').addClass('num-active'); 
    $('.custom-accordion .sec2 .acc-content').hide(); 
    $('.custom-accordion .sec3 .acc-content').hide(); 
    $('.custom-accordion .sec4 .acc-content').hide();  
  
      var tid = setTimeout(section_five, 0); 
      function section_one() {
        $('.custom-accordion .sec1 .acc-content').slideUp();  
        $('.custom-accordion .sec1 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec1 .sec-num').addClass('numactived'); 
        $('.custom-accordion .sec1 .sec-num').html('<i class="fa fa-check"></i> ');
  
        $('.custom-accordion .sec2 .acc-content').slideDown();
        $('.custom-accordion .sec2 .sec-num').html('2'); 
        $('.custom-accordion .sec2 .sec-num').addClass('num-active');  
  
        $('.video-section video').remove(); 
        $('.video-section').html('<video width="384" height="384" loop="" muted="" autoplay="" poster="/wp-content/uploads/2022/09/Quotes-new.png"><source src="/wp-content/uploads/2022/09/Quote.mp4" type="video/mp4"></video>');
  
        $('.custom-accordion .sec3 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec3 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec3 .acc-content').slideUp(); 
        $('.custom-accordion .sec3 .sec-num').html('3'); 
  
        $('.custom-accordion .sec4 .sec-num').removeClass('numactived'); 
        $('.custom-accordion .sec4 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec4 .acc-content').slideUp();  
        $('.custom-accordion .sec4 .sec-num').html('4'); 
  
        $('.custom-accordion .sec5 .sec-num').removeClass('numactived'); 
        $('.custom-accordion .sec5 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec5 .acc-content').slideUp();  
          
        tid = setTimeout(section_two, 16000);
      }
  
      function section_two() {
        $('.custom-accordion .sec2 .acc-content').slideUp(); 
        $('.custom-accordion .sec2 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec2 .sec-num').addClass('numactived'); 
        $('.custom-accordion .sec2 .sec-num').html('<i class="fa fa-check"></i> ');
  
        $('.custom-accordion .sec1 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec1 .sec-num').addClass('numactived'); 
        $('.custom-accordion .sec1 .acc-content').slideUp();  
        $('.custom-accordion .sec1 .sec-num').removeClass('num-active'); 
  
        $('.custom-accordion .sec3 .acc-content').slideDown();  
        $('.custom-accordion .sec3 .sec-num').addClass('num-active');
        $('.custom-accordion .sec3 .sec-num').html('3'); 
        $('.video-section video').remove(); 
        $('.video-section').html('<video width="384" height="384" loop="" muted="" autoplay="" poster="/wp-content/uploads/2022/09/CreateRecords.png"><source src="/wp-content/uploads/2022/09/CreateRecords.mp4" type="video/mp4"></video>');
  
  
        $('.custom-accordion .sec4 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec4 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec4 .acc-content').slideUp();
        $('.custom-accordion .sec4 .sec-num').html('4'); 
  
        $('.custom-accordion .sec5 .sec-num').removeClass('numactived'); 
        $('.custom-accordion .sec5 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec5 .acc-content').slideUp();  
  
        tid = setTimeout(section_three, 9000); 
      }  
  
      function section_three() {
        $('.custom-accordion .sec3 .acc-content').slideUp(); 
  
        $('.custom-accordion .sec3 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec3 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec3 .sec-num').addClass('numactived'); 
        
  
        $('.custom-accordion .sec2 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec2 .sec-num').addClass('numactived');
        $('.custom-accordion .sec2 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec2 .acc-content').slideUp();
  
        $('.custom-accordion .sec1 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec1 .sec-num').addClass('numactived'); 
        $('.custom-accordion .sec1 .acc-content').slideUp();  
        $('.custom-accordion .sec1 .sec-num').removeClass('num-active'); 
  
        $('.custom-accordion .sec5 .sec-num').removeClass('numactived'); 
        $('.custom-accordion .sec5 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec5 .acc-content').slideUp();  
  
  
        $('.custom-accordion .sec4 .acc-content').slideDown();
        $('.custom-accordion .sec4 .sec-num').html('4'); 
        $('.custom-accordion .sec4 .sec-num').addClass('num-active'); 
        $('.video-section video').remove(); 
        $('.video-section').html('<video width="384" height="384" loop="" muted="" autoplay="" poster="/wp-content/uploads/2022/09/Invoices2.png"><source src="/wp-content/uploads/2022/09/Invoices.mp4" type="video/mp4"></video>');
   
        tid = setTimeout(section_four, 2000); 
      } 
  
      function section_four() {   
        $('.custom-accordion .sec1 .sec-num').addClass('numactived');    
        $('.custom-accordion .sec1 .acc-content').slideUp(); 
        $('.custom-accordion .sec1 .sec-num').removeClass('num-active');
        $('.custom-accordion .sec1 .sec-num').html('<i class="fa fa-check"></i> ');
  
        $('.custom-accordion .sec5 .sec-num').removeClass('numactived');    
        $('.custom-accordion .sec5 .acc-content').slideDown(); 
        $('.custom-accordion .sec5 .sec-num').addClass('num-active');
  
        $('.custom-accordion .sec4 .acc-content').slideUp(); 
        $('.custom-accordion .sec4 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec4 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec4 .sec-num').addClass('numactived');  
  
  
        $('.custom-accordion .sec3 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec3 .sec-num').addClass('numactived');
        $('.custom-accordion .sec3 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec3 .acc-content').slideUp();  
  
          
        $('.custom-accordion .sec2 .sec-num').addClass('numactived'); 
        $('.custom-accordion .sec2 .sec-num').html('<i class="fa fa-check"></i> ');
        $('.custom-accordion .sec2 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec2 .acc-content').slideUp(); 
  
  
        $('.video-section video').remove(); 
        $('.video-section').html('<video width="384" height="384" loop="" muted="" autoplay="" poster="/wp-content/uploads/2022/09/GetPaid.png"><source src="/wp-content/uploads/2022/09/GetPaid.mp4" type="video/mp4"></video>');  
        
        tid = setTimeout(section_five, 9000);   
      } 
  
      function  section_five() {   
        $('.custom-accordion .sec1 .sec-num').removeClass('numactived');    
        $('.custom-accordion .sec1 .acc-content').slideDown(); 
        $('.custom-accordion .sec1 .sec-num').addClass('num-active');
        $('.custom-accordion .sec1 .sec-num').html('1');  
  
        $('.custom-accordion .sec4 .acc-content').slideUp(); 
        $('.custom-accordion .sec4 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec4 .sec-num').html('4'); 
        $('.custom-accordion .sec4 .sec-num').removeClass('numactived');  
  
        $('.custom-accordion .sec5 .acc-content').slideUp(); 
        $('.custom-accordion .sec5 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec5 .sec-num').html('5'); 
        $('.custom-accordion .sec5 .sec-num').removeClass('numactived');   
  
        $('.custom-accordion .sec3 .sec-num').html('3'); 
        $('.custom-accordion .sec3 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec3 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec3 .acc-content').slideUp();  
  
        $('.custom-accordion .sec2 .sec-num').removeClass('numactived'); 
        $('.custom-accordion .sec2 .sec-num').html('2'); 
        $('.custom-accordion .sec2 .sec-num').removeClass('num-active'); 
        $('.custom-accordion .sec2 .acc-content').slideUp(); 
  
        $('.video-section video').remove(); 
        $('.video-section').html('<video width="384" height="384" loop="" muted="" autoplay="" poster="/wp-content/uploads/2022/09/StayOnTopOfRequests-new.png"><source src="/wp-content/uploads/2023/05/StayOnTopOfRequest.mp4" type="video/mp4"></video>');  
        
        tid = setTimeout(section_one, 10000);  
      } 
  
      /* when quote is clicked */
      $('.sec2').click(function(){
        clearTimeout(tid); 
        $('.custom-accordion .sec2 .sec-num').removeClass('num-active');
        $('.custom-accordion .sec2 .sec-num').removeClass('numactived');
        tid = setTimeout(section_one, 0);
      });
  
      /* when create record is clicked */
      $('.sec3').click(function(){
        clearTimeout(tid); 
        $('.custom-accordion .sec3 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec3 .sec-num').removeClass('num-active');
        tid = setTimeout(section_two, 0);
      });
  
      /* when Invoice is clicked */
      $('.sec4').click(function(){
        clearTimeout(tid);  
        $('.custom-accordion .sec4 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec4 .sec-num').removeClass('num-active');
        tid = setTimeout(section_three, 0); 
      });
  
       /* when get paid is clicked */
      $('.sec5').click(function(){
        clearTimeout(tid); 
        $('.custom-accordion .sec5 .sec-num').removeClass('num-active')
        tid = setTimeout(section_four, 0); 
      });
  
      /* when stay on top of requests is clicked */
      $('.sec1').click(function(){
        clearTimeout(tid); 
        $('.custom-accordion .sec1 .sec-num').removeClass('numactived');
        $('.custom-accordion .sec1 .sec-num').removeClass('num-active'); 
        tid = setTimeout(section_five, 0); 
      });
  
  
      /* Scrolling first section 
      $(window).on('scroll', function () {
          const scroll1 = document.documentElement.scrollTop - 700;
          const height1 =$('.msec2').offset().top - document.documentElement.clientHeight;
          
          let scrolled1 = (scroll1 / height1) * 100;  
  
          console.log('scroll = '+document.documentElement.scrollTop);
          console.log('height = '+height1);   
          console.log('scrollheight = '+document.documentElement.scrollHeight);   
          console.log('client = '+document.documentElement.clientHeight);
          console.log('percentage1 = '+scrolled1); 
  
          if (scrolled1 <= 1) {
              $('.mline1').stop().animate({height: scrolled1+"%"},200);  
              $('.msec2').addClass('activatedclass'); 
              $('.msec2 .mline').removeClass('lineshow mline2'); 
          }
          else if (scrolled1 >= 2 && scrolled1 <= 90){ 
            $('.mline1').stop().animate({height:scrolled1+"%"},200); 
            $('.msec2').removeClass('activatedclass'); 
            $('.msec2 .mline').removeClass('lineshow mline2'); 
          }
          else {
               $('.mline1').stop().animate({height: "100%"},200); 
          }
      });*/
  
      /* scrolling second section 
      $(window).on('scroll', function () { 
        const scroll2 = document.documentElement.scrollTop - 1100; 
        const height2 =$('.msec3').offset().top - document.documentElement.clientHeight; 
        
        let scrolled2 = (scroll2 / height2) * 100; 
        console.log('percentage2 = '+scrolled2);       
  
        if (scrolled2 <= 1) {
            $('.mline2').stop().animate({height: scrolled2+"%"},200);  
        }
        else if (scrolled2 >= 2 && scrolled2 <= 25){
          $('.mline2').stop().animate({height:"20%"},200);  
        }
        else if (scrolled2 > 25 && scrolled2 <= 60){
          $('.mline2').stop().animate({height:scrolled2+"%"},200);  
        }
        else if (scrolled2 > 55 && scrolled2 <= 65){
          $('.mline2').stop().animate({height:"80%"},200);  
        }
        else {
             $('.mline2').stop().animate({height: "100%"},200);   
        } 
      });*/
  
      /* scrolling third section 
      $(window).on('scroll', function () {
        const scroll3 = document.documentElement.scrollTop - 1200;
        const height3 =$('.msec4').offset().top - document.documentElement.clientHeight;
        
        let scrolled3 = (scroll3 / height3) * 100; 
        console.log('percentage3 = '+scrolled3);       
  
        if (scrolled3 <= 1) {
            $('.mline3').stop().animate({height: scrolled3+"%"},200);  
        }
        else if (scrolled3 >= 2 && scrolled3 <= 64){
          $('.mline3').stop().animate({height:scrolled3+"%"},200); 
        }
        else {
             $('.mline3').stop().animate({height: "100%"},400);   
        }
      });*/
  
  
  
      /*$(window).on('scroll', function(){
        $('.msec1').addClass('activatedclass');   
            $('.msec1 .mline').addClass('lineshow mline1');  
          if($(window).scrollTop() >= ($('.msec2').offset().top - 200)){
  
            if($('.msec1 .mline1').height()>=100){
              $('.msec2').addClass('activatedclass'); 
              $('.msec2 .mline').addClass('lineshow mline2'); 
              $('.mline1').stop().animate({height: "100%"},0);  
            }
            else{
              $('.msec2').removeClass('activatedclass');
              $('.msec2 .mline').removeClass('lineshow mline2'); 
            }
  
          }
          else 
          {
              $('.msec2').removeClass('activatedclass');
              $('.msec2 .mline').removeClass('lineshow mline2'); 
  
          }
          if($(window).scrollTop() >= ($('.msec3').offset().top - 150)){
            
            if($('.msec2 .mline2').height()>=100){
              $('.msec3').addClass('activatedclass'); 
              $('.msec3 .mline').addClass('lineshow mline3'); 
              $('.mline2').stop().animate({height: "100%"},100);  
            }
            else{
              $('.msec2').removeClass('activatedclass');
              $('.msec2 .mline').removeClass('lineshow mline2'); 
            } 
          }
          else 
          {
              $('.msec3').removeClass('activatedclass');
              $('.msec3 .mline').removeClass('lineshow mline3'); 
  
          } 
          if($(window).scrollTop() >= ($('.msec4').offset().top - 100)){
            if($('.msec3 .mline3').height()>=100){ 
              $('.msec4').addClass('activatedclass');  
            }
            else{
              $('.msec4').removeClass('activatedclass'); 
            } 
          }
          else 
          {
              $('.msec4').removeClass('activatedclass');
          } 
      });*/
  
  
  
 /* $('.progress-container').css('width',document.documentElement.clientHeight);  
  $('.progress-container').hide();  
  // When the user scrolls the page, execute myFunction 
  window.onscroll = function() {myFunction()};
  
  function myFunction() {
    if($(window).scrollTop() >= ($('.msec1').offset().top)){
      $('.progress-container').show(); 
      $('.newheader').css('top','18px');
    }
    else{
      $('.progress-container').hide(); 
    } 
    if($(window).scrollTop() >= ($('.msec1 .m-acc-content').offset().top - 30)){
      $('.newheader').css('top','-5px');
    }
    else{
      $('.newheader').css('top','18px');
    }
  
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = ((winScroll / height) * 100)+25;
    //console.log(scrolled);
    
    if(scrolled >=5 && scrolled <=9.55){
      document.getElementById("myBar").style.width = scrolled + "%"; 
      $('.m-sec-num').removeClass('progresscompleted');
      $('#myBar').show();
   
    }
    if(scrolled >9.55 && scrolled <=49){
      document.getElementById("myBar").style.width = scrolled + "%";
      $('.m-sec-num').removeClass('progresscompleted');
      $('#myBar').show();
      $('.m-sec-num').removeClass('progresscompleted');
    }
    else if(scrolled>30.5){ 
      $('.m-sec-num').addClass('progresscompleted');
      $('#myBar').hide();
  
    }
    else{
      $('.m-sec-num').removeClass('progresscompleted');
    }
  
  } */
  
  /*$(window).on('scroll', function(){
    $('.msec1').addClass('activatedclass');   
      $('.msec1 .mline').addClass('lineshow mline1');  
      if($(window).scrollTop() >= ($('.msec2').offset().top - 400)){
        $('.msec2').addClass('activatedclass');
      }
      else 
      {
          $('.msec2').removeClass('activatedclass');
      }
      if($(window).scrollTop() >= ($('.msec3').offset().top - 400)){
        $('.msec3').addClass('activatedclass');  
      }
      else 
      {
          $('.msec3').removeClass('activatedclass');
      } 
      
      if($(window).scrollTop() >= ($('.msec4').offset().top - 500)){
          $('.msec4').addClass('activatedclass'); 
      }
      else 
      {
          $('.msec4').removeClass('activatedclass');
      } 
      if($(window).scrollTop() >= ($('.msec5').offset().top - 150)){
        $('.m-sec-num').addClass('progresscompleted');
        $('#myBar').hide();
        $('.msec5').addClass('activatedclass'); 
      }
      else 
      {
          $('.msec5').removeClass('activatedclass');
      } 
  });*/ 
  
  });



  /* testing function for percentage */
  //window.onscroll = function() {myFunctionnew()};
  
/****  $(window).on('scroll', function() {
  $('.msec1').addClass('activatedclass');   
  $('.msec1 .mline').addClass('lineshow mline1');  
  var scroll = 0;
  var hscroll = 0;

    if(document.documentElement.clientHeight<600){
      scroll = 700;
      hscroll = 650;  
    }
    if(document.documentElement.clientHeight>600 && document.documentElement.clientHeight<700){
        scroll = 700;
        hscroll = 600;
    }
    else if(document.documentElement.clientHeight>700 && document.documentElement.clientHeight<800){
        scroll = 700;
        hscroll = 450;
    }
    else if(document.documentElement.clientHeight>=800){
      scroll = 700;
      hscroll = 450;
    }

    var windScroll = document.documentElement.scrollTop - ($('.msec1').offset().top - scroll); 

    var wheight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
   

    var newheight = ($('.msec2').offset().top - hscroll) - document.documentElement.clientHeight;

    var wscrolled = (windScroll / newheight) * 100;
    // console.log('scroll = '+scroll);
    // console.log('hscroll = '+hscroll);
    // console.log('wscrolled1% = '+wscrolled); 

    $('.mline1').stop().animate({height: wscrolled+'%'},0);  

    if(wscrolled>=96){
      $('.msec2').addClass('activatedclass');
    }
    else {
      $('.msec2').removeClass('activatedclass');
    }
    
    if(wscrolled>=196){
      $('.msec3').addClass('activatedclass');
    }
    else{
      $('.msec3').removeClass('activatedclass');

    } 
    if(wscrolled>=296){
      $('.msec4').addClass('activatedclass');
    }
    else{
      $('.msec4').removeClass('activatedclass'); 
    }
    if(wscrolled>=396 || ($(window).scrollTop() >= ($('.msec5').offset().top - 100))){
      $('.msec5').addClass('activatedclass'); 
    }
    else 
    {
        $('.msec5').removeClass('activatedclass');
    } 

  });****/