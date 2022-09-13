const btnMenu: HTMLElement | null = document.getElementById("js-btn-menu");
const subNav: HTMLElement | null = document.getElementById("js-menu");

btnMenu?.addEventListener("click", () => {
  // ?はオプショナルチェイニングで、nullでもエラーにならずundefindが帰ってくるようにする
  btnMenu?.classList.toggle("active");
  subNav?.classList.toggle("active");
});
