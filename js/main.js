$(function(){
    var text;
    var w = 875;
    var slide;
    var h = 22;
    var noties_list;
    
    noties_list = setInterval(function(){
        $('#footer .noties_list > div:nth-child(1)').animate({
          'margin-top':(h*(-1)) + 'px'},600,function(){
            $('#footer .noties_list').append($('#footer .noties_list > div:nth-child(1)')); 
            $('#footer .noties_list > div:last-child').css('margin-top','0px');
            
           })//animate
    },2500);
    //푸터 공지사항


    //슬라이드


      //닫힘0, 열림1
      
      var sta = 0;

      $('#nav .nav1 .open').click(function(){ 
        if (sta == 0) {
          $('#nav .menu1').slideDown(300);
          $('#nav .nav1 .closs').show();
          sta = 1
        } else {
          $('#nav .menu1').slideUp(300);
          $('#nav .nav1 .closs').hide();
          sta = 0
        }
      });
      $('#nav .nav1 .closs').click(function(){ 

          $('#nav .menu1').slideUp(300);
          $('#nav .nav1 .closs').hide();

        
      });
      //네비여닫이
    
      $('.language_list').click(function(){ 
        if (sta == 0) {
          $('.language1').addClass('on');
          $('.language1 > div').addClass('on, add');
          $('.arrow_under').attr('src','./images/triarrow_up.png');
        sta =1 ;}
          else{
          $('.language1').removeClass('on');
          $('.language1 > div').removeClass('add');
          $('.arrow_under').attr('src','./images/triarrow_down.png');
          sta = 0;
          }
      });
              //언어선택여닫이
      $('#chois .inner .level1 .Qa div button').click(function(){ 
          $('.level1').hide();
          $('#chois .inner .level2').show();
          $('#chois .inner .level p:nth-child(1)').css('color','#C4C4C4');
          $('#chois .inner .level p:nth-child(2)').css('color','#C4C4C4');
          $('#chois .inner .level p:nth-child(3)').css('color','#1E144B');
        });
      $('#chois .inner .level2 .Qa div button').click(function(){ 
          $('.level2').hide();
          $('#chois .inner .level3').show();
          $('#chois .inner .level p:nth-child(1)').css('color','#C4C4C4');
          $('#chois .inner .level p:nth-child(2)').css('color','#C4C4C4');
          $('#chois .inner .level p:nth-child(3)').css('color','#C4C4C4');
          $('#chois .inner .level p:nth-child(4)').css('color','#1E144B');
        });  
        $('#chois .inner .level3 .Qa div button').click(function(){
            $('#chois .inner .level3').hide();
            $('#chois .inner .level1').show();
            $('#chois .inner .level p:nth-child(1)').css('color','#1E144B')
            $('#chois .inner .level p:nth-child(2)').css('color','#C4C4C4')
            $('#chois .inner .level p:nth-child(3)').css('color','#C4C4C4')
            $('#chois .inner .level p:nth-child(4)').css('color','#C4C4C4')
            $('#chois .inner .level p:nth-child(5)').css('color','#C4C4C4')

        $(location).attr('href','#')
      });
      //여행지선택창


      $('#kball .slick-center').hover(function(){
        
      })
      //방방곳곳마우스오버

      

    });
    $(document).ready(function(){
      $('.kball1').slick({
centerMode: true,
slidesToShow: 5,
dots: false,
centerPadding: '0px',  //중앙에 슬라이드가 보여지는 모드에서 padding값
});

      $('.left').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.for-slider'
      });
      $('.for-slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.left',
        dots: false,
        arrows: false,
        centerMode: true,
        focusOnSelect: true,
      });
      //유튜브

      $('#slide1 .text').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '#slide1 .slide'
      });
      $('#slide1 .slide').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '#slide1 .text',
        dots: false,
        arrows: false,
        autoplay : true,
        autoplaySpeed : 3000,
        infinite : true, 
      });

      //슬라이드



      $('#logo_list .logo').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        focusOnSelect: true,
        arrows: true,
        dots: false,
        infinite : true,
        centerPadding: '00px',  //중앙에 슬라이드가 보여지는 모드에서 padding값
      });

    
});

 
    

