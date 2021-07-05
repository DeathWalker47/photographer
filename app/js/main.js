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

  $('.menu a').on('click', function() {
    let href = $(this).attr('href');
    $('html, body').animate({
        scrollTop: $(href).offset().top
    }, {
        duration: 1200,  
        easing: "linear" 
    });
    return false;
  });
    
});