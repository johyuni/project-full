$(document).ready(function(){


  $('#zine-container').slick({
    slidesToShow: 1.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows : true,
    // centerMode: true,
  });

  $(".menu-btn").click(function(){
      $(".mo-nav").addClass("disA");
  });

  $(".depth01 li button").click(function(){
      $(".mo-nav").removeClass("disA");
  });



});
