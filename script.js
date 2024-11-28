

// Navigation Manu Script code


const newIcon = document.getElementById('menuIcon');
const navMenu = document.querySelector("nav");

newIcon.addEventListener('click', function() {
  navMenu.classList.toggle("active");
});



const dropdownIcon = document.querySelector(".select-dropdown__button");

dropdownIcon.addEventListener('click', function() {
  this.classList.toggle("active");
});



$(".select-dropdown__button").on("click", function () {
    $(this).next(".select-dropdown__list").toggleClass("active");
});

$(".select-dropdown__list-item").on("click", function () {
    var itemValue = $(this).data("value");
    console.log(itemValue);
    $(this)
        .closest(".select-dropdown") 
        .find(".select-dropdown__button span") 
        .text($(this).text())
        .parent() 
        .attr("data-value", itemValue); 
    $(this).closest(".select-dropdown__list").toggleClass("active");
});




$(".select-dropdown__button-tra").on("click", function () {
    $(this).next(".select-dropdown__list").toggleClass("active");
});

$(".select-dropdown__list-item").on("click", function () {
    var itemValue = $(this).data("value");
    console.log(itemValue);
    $(this)
        .closest(".select-dropdown") 
        .find(".select-dropdown__button-tra span") 
        .text($(this).text())
        .parent() 
        .attr("data-value", itemValue); 
    $(this).closest(".select-dropdown__list").toggleClass("active");
});



$(".select-dropdown__button-rupi").on("click", function () {
    $(this).next(".select-dropdown__list").toggleClass("active");
});

$(".select-dropdown__list-item").on("click", function () {
    var itemValue = $(this).data("value");
    console.log(itemValue);
    $(this)
        .closest(".select-dropdown") 
        .find(".select-dropdown__button-rupi span") 
        .text($(this).text())
        .parent() 
        .attr("data-value", itemValue); 
    $(this).closest(".select-dropdown__list").toggleClass("active");
});






//massage slider  script code image

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; 
    var syncedSecondary = true;
  
    sync1.on('initialized.owl.carousel', function() {
      sync1.find(".owl-video").eq(0).find('.owl-video-play-icon').trigger('click');
    }).owlCarousel({
      items: 1,
      dots: false,
      nav: false,
      loop: false,
      video: true,
    }).on('changed.owl.carousel', syncPosition);
  
    sync2
      .on('initialized.owl.carousel', function() {
        sync2.find(".owl-item").eq(0).addClass("current");
      })
      .owlCarousel({
        items: slidesPerPage,
        dots: false,
        nav: false,
        loop: false,
        video: true,
        slideBy: slidesPerPage, 
        responsiveRefreshRate: 100
      }).on('changed.owl.carousel', syncPosition2);
  
    function syncPosition(el) {
      
      var count = el.item.count - 1;
      var current = Math.round(el.item.index - (el.item.count / 2) - .5);
  
      if (current < 0) {
        current = count;
      }
      if (current > count)  {
        current = 0;
      }
  
      //end block
  
      sync2
        .find(".owl-item")
        .removeClass("current")
        .eq(current)
        .addClass("current");
      var onscreen = sync2.find('.owl-item.active').length - 1;
      var start = sync2.find('.owl-item.active').first().index();
      var end = sync2.find('.owl-item.active').last().index();
  
      if (current > end) {
        sync2.data('owl.carousel').to(current, 100, true);
      }
      if (current < start) {
        sync2.data('owl.carousel').to(current - onscreen, 100, true);
      }
    }
  
    function syncPosition2(el) {
      if (syncedSecondary) {
        var number = el.item.index;
        sync1.data('owl.carousel').to(number, 100, true);
      }
    }
  
    sync2.on("click", ".owl-item", function(e) {
      e.preventDefault();
      var number = $(this).index();
      sync1.data('owl.carousel').to(number, 300, true);
  
      
  
    });
  
  });






 // testimonial Slide script code


 $(' .testimonial-crosel').owlCarousel({
  loop:true,
  margin:0,
  nav:false,
  dots:true,
  autoplay:false,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoHeight:true,
  navText : [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
   ],
  responsive:{

    0:{

      items:1
    },
    // 400:{

    //   items:1
    // },
    // 500:{

    //   items:1
    // },
    // 768:{

    //   items:1
    // },
    // 992:{

    //   items:1
    // }
   }
})





$(' .bundle').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots:true,
  autoplay:false,
  center:true,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoHeight:true,
  navText : [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
   ],
  responsive:{

    0:{

      items:2
    },
    900:{

      items:2
    },
    1024:{

      items:3
    }
   }
})


   //Accordian  Script Code

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}





$(' .day-sale').owlCarousel({
  loop:true,
  margin:0,
  nav:true,
  dots:true,
  autoplay:false,
  autoplayTimeout: 3000,
  smartSpeed: 1000,
  autoHeight:true,
  navText : [
    '<i class="fa-solid fa-chevron-left"></i>',
    '<i class="fa-solid fa-chevron-right"></i>'
   ],
  responsive:{

    0:{

      items:4
    },
    // 400:{

    //   items:1
    // },
    // 500:{

    //   items:1
    // },
    // 768:{

    //   items:1
    // },
    // 992:{

    //   items:1
    // }
   }
})






var slickCarousel = $('.slider-vertical');
slickCarousel.slick({
    dots: true,
    infinite: false,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    vertical: true,
    verticalSwiping: true,
    dots: false,
    centerPadding: '50px',
    arrows: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
            }
        }, {
            breakpoint: 639,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
			    vertical: false,
			    verticalSwiping: false,
            }
        }
    ]
});





/* educational-journey  slider*/

const video = document.getElementById('myVideo');
const playPauseIcon = document.getElementById('playPauseIcon');


playPauseIcon.addEventListener('click', function() {
    if (video.paused) {
        video.play(); 
        playPauseIcon.src = 'https://img.icons8.com/?size=100&id=61012&format=png&color=000000'; 
    } else {
        video.pause(); 
        playPauseIcon.src = '/image/Vector.png'; 
    }
});






