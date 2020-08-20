$(window).load(function () {
  $(".before-after").twentytwenty({
    before_label: "With Skinally", // Set a custom before label
    after_label: "Without Skinally",
  }); // Set a custom after label);
  $(".before-slider").slick({
    draggable: false,
    dots: true,
    dotsClass: "before-slider__dots",
    prevArrow: $(".arrow-left"),
    nextArrow: $(".arrow-right"),
  });
  $(".menu__button").on("click", function () {
    $(".menu").toggleClass("menu-active");
  });
  $("a").click(function () {
    var _href = $(this).attr("href");
    $("html, body").animate({ scrollTop: $(_href).offset().top - 70 + "px" });
    return false;
  });
});
