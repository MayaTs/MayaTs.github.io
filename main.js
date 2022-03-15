
$(document).ready(function(){
  const slider = $("#slider").owlCarousel({
    margin:5,
    loop: true,
    smartSpeed: 4000,
    touchDrag: true,
    autoplay: 150,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:1
      },
      768:{items:3
      },
      1000:{
        items:3
      },
      1080:{
        items:3
      }
    }
  });
});

$(document).ready(function(){
  const sliderDetails = $("#sliderDetails").owlCarousel({
    margin:5,
    loop: true,
    smartSpeed: 4000,
    touchDrag: true,
    autoplay: 150,
    rtl: true,
    responsive:{
      0:{
        items:1
      },
      480:{
        items:1
      },
      768:{items:3
      },
      1000:{
        items:3
      },
      1080:{
        items:3
      }
    }
  });
});

$(function() {
  $('.marquee').marquee({
    duration: 7000,
    startVisible: true,
    duplicated: true
  });
});




$(document).ready(() => {
  const onScrollHeader = () => {
    const header = $('.header')

    let prevScroll = $(window).scrollTop()
    let currentScroll //
    $(window).scroll(() => {

      currentScroll = $(window).scrollTop()

      const headerHidden = () => header.hasClass('header_hidden')

      if (currentScroll > prevScroll && !headerHidden()) {
        header.addClass('header_hidden')
      }
      if (currentScroll < prevScroll && headerHidden()) {
        header.removeClass('header_hidden')
      }

      prevScroll = currentScroll

    })

  }

  onScrollHeader()

})


$(document).ready(function(){
$(".sub-menuNav_list").hide();

$(".menuNav_link").click(function(){
  $(".sub-menuNav_list").slideToggle();

  });
});












