/*!
    * Start Bootstrap - Creative v6.0.4 (https://startbootstrap.com/theme/creative)
    * Copyright 2013-2020 Start Bootstrap
    * Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
    */
    (function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 72)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 75
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-scrolled");
    } else {
      $("#mainNav").removeClass("navbar-scrolled");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
  var loading=$('.loading');
  // lodaing 페이지

  $(window).on('load',function(){
      loading.remove();
      $('.navbar').hide();
    });
    $(window).on('pageshow',function(){
      $('html,body').css({'overflow-x':'hidden','overflow-y':'visible'});
      $('body').css('overflow','visible');
      $('.navbar').show();
    });

    // 캠페인 모달창
    $('.blue_modal').hide();
    $('.blue').click(function(){
      $('.blue_modal').toggle();
    });

    $('.blue_submit').click(function(){
      alert("당신의 블루마크 번호는 정상입니다");
      $('.blue_modal').hide();
    })

    // waypoint
    $('.wp1').waypoint(function(direction){
      if(direction==='down'){
        $('.wp1').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });
    $('.wp1').waypoint(function(direction){
      if(direction==='up'){
        $('.wp1').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });

    $('.wp2').waypoint(function(direction){
      if(direction==='down'){
        $('.wp2').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });
    $('.wp2').waypoint(function(direction){
      if(direction==='up'){
        $('.wp2').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });

    $('.wp3').waypoint(function(direction){
      if(direction==='down'){
        $('.wp3').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });
    $('.wp3').waypoint(function(direction){
      if(direction==='up'){
        $('.wp3').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });

    $('.wp4').waypoint(function(direction){
      if(direction==='down'){
        $('.wp4').addClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });
    $('.wp4').waypoint(function(direction){
      if(direction==='up'){
        $('.wp4').removeClass('animate__animated animate__fadeIn');
      }
    },{
      offset:'90%'
    });

  // Magnific popup calls
  $('#portfolio').magnificPopup({
    delegate: 'a',
    type: 'image',
    tLoading: 'Loading image #%curr%...',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enabled: true,
      navigateByImgClick: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });

})(jQuery); // End of use strict
