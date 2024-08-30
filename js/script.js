// JS

const hamburger = document.getElementById("burger");

const havUl = document.getElementById("navUL");

hamburger.addEventListener("click", () => {
  navUL.classList.toggle("show");
  hamburger.classList.toggle("active");
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");
  hamburger.classList.remove("active");
});

navUL.addEventListener("click", () => {
  navUL.classList.remove("show");
  hamburger.classList.remove("active");
});
