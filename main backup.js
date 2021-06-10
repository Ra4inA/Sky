$(window).ready(function(){
  if($(this).width() < 993) {
      $('.offer__items').not('.slick-initialized').slick({
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchTreshhold: 10,
      });
      $('.photos').not('.slick-initialized').slick({
        adaptiveHeight: true,
        mobileFirst: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchTreshhold: 10,
      });
      $('.crew__members').not('.slick-initialized').slick({
        adaptiveHeight: true,
        mobileFirst: true,
        centerMode: false,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        touchTreshhold: 10,
      });
  } else {
    $('.offer__items, .photos, .crew__members').filter(".slick-initialized").slick("unslick");
  }
});
$(window).resize(function(){
  if($(this).width() < 993) {
    $('.offer__items').not('.slick-initialized').slick({
      mobileFirst: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchTreshhold: 10,
    });
    $('.photos').not('.slick-initialized').slick({
      adaptiveHeight: true,
      mobileFirst: true,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchTreshhold: 10,
    });
    $('.crew__members').not('.slick-initialized').slick({
      adaptiveHeight: true,
      mobileFirst: true,  
      centerMode: false,
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      touchTreshhold: 10,
    }); 
  } else {
    $('.offer__items, .photos, .crew__members').filter(".slick-initialized").slick("unslick");
  }
});


$('.testimonials__list').slick({
  adaptiveHeight: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  touchTreshhold: 5,
  centerMode: true,
  variableWidth: true,
  dots: true,
  arrows: false,
});








  let bg = document.querySelectorAll('.mouse-parallax-bg');
  let near = document.querySelector(".parallax-near");
  let medium = document.querySelector(".parallax-medium");
  let far = document.querySelector(".parallax-far");
for (let i = 0; i < bg.length; i++){
    window.addEventListener('mousemove', function(e) { 
        let x = e.clientX / window.innerWidth;
        let y = e.clientY / window.innerHeight;     
        near.style.transform = 'translate(-' + x * 50 + 'px, -' + y * 50 + 'px)';
        medium.style.transform = 'translate(-' + x * 25 + 'px, -' + y * 25 + 'px)';
        far.style.transform = 'translate(-' + x * 10 + 'px, -' + y * 10 + 'px)';
    });    
}
 // bg[i].style.transform 


const animItems = document.querySelectorAll("._animate");
$("body").ready(function(){$(window).scrollTop(1);});
$(window).on("scroll", function(){
  for (let index = 0; index < animItems.length; index++){
    if($(window).scrollTop() + $(window).height() > $(animItems[index]).offset().top + $(animItems[index]).height() / 2 
      & $(window).scrollTop() < $(animItems[index]).offset().top + $(animItems[index]).height() / 2){
      $(animItems[index]).addClass("_animate-Active");
    } else {
      if($(animItems[index]).hasClass("_anim-no-hide") !== true){$(animItems[index]).removeClass("_animate-Active");}
    }
  }
});