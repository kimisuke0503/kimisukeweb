const logo = document.querySelector("#js-logo");
const btnMenu = document.querySelector("#js-btn-menu");
const nav = document.querySelector("#js-menu");
const backCover = document.querySelector("#js-back-cover");

logo.addEventListener("click", function () {
  logo.classList.toggle("active");
});
btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
  backCover.classList.toggle("active");
});
