$(function () {
  new WOW().init();

  $(".top-header__spoiler-title").on("click", function () {
    if ($(".top-header__spoiler").hasClass("one")) {
      $(".top-header__spoiler-title").not($(this)).removeClass("active");
      $(".top-header__spoiler-list").not($(this).next()).slideUp(40);
    }
    $(this).toggleClass("active").next().slideToggle(40);
  });

  $(".footer__item").on("click", function (e) {
    e.preventDefault();
    $(this).toggleClass("active");
  });

  $(".header__slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          dots: false,
        },
      },
    ],
  });
});
