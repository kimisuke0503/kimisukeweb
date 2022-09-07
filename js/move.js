const btnMenu = document.querySelector("#js-btn-menu");
const nav = document.querySelector("#js-menu");
const backCover = document.querySelector("js-back-cover");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
  backCover.classList.toggle("active");
});
