$(function(){
  
  $('.slider').slick({
    infinite: true,
    arrows: true,
    speed: 1200,
    slidesToShow: 1,
  });

  $('.about__portfolio-link').hover(function(){
    $('.about__portfolio-images').toggleClass('about__portfolio-images--active');
  });

});