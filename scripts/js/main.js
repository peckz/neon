$(document).ready(function() {
  $(".starbucks").click(function() {
    $(".starbucks-bill").addClass("show");
  });

  $(".back-button").click(function() {
    $(".starbucks-bill").removeClass("show");
  });

  $(window).scroll(function() {
    let sticky = $(".header");
    let scroll = $(window).scrollTop();

    if (scroll >= 10) {
      sticky.addClass("animate");
    } else {
      sticky.removeClass("animate");
    }
  });
});

$(window).load(function() {});

$(window).resize(function() {});
