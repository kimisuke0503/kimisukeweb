const btnMenu = document.querySelector("#js-btn-menu");
const nav = document.querySelector("#js-menu");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
});

$(window).on("scroll", function () {
  if (170 /*kimisukeimgの高さ*/ < $(this).scrollTop()) {
    $(".page-header").addClass("change-color");
    $("a#js-logo").addClass("change-color");
    $("#js-btn-menu > span").addClass("change-color");
    $("#js-main-nav > li > a").addClass("change-color");
  } else {
    $(".page-header").removeClass("change-color");
    $("a#js-logo").removeClass("change-color");
    $("#js-btn-menu > span").removeClass("change-color");
    $("#js-main-nav > li > a").removeClass("change-color");
  }
});
