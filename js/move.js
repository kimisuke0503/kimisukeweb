const btnMenu = document.querySelector("#js-btn-menu");
const nav = document.querySelector("#js-menu");

btnMenu.addEventListener("click", function () {
  btnMenu.classList.toggle("active");
  nav.classList.toggle("active");
});
