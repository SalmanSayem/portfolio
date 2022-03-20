// Slider Start
$('.slide').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 1,
        }
      }
    ]
  });
// Slider End

var navber = document.getElementById("navber")
var back_to_top = document.querySelector(".back_to_top")
  
window.addEventListener("scroll",function(){
    navber.classList.toggle("sticky",window.scrollY > 0)
    back_to_top.classList.toggle("bTot",window.scrollY > 0)

})

// Couter Up Start
$('.counter').counterUp();
// Couter Up End