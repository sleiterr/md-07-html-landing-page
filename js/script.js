// JS

   const hamburger = document.querySelector(".burger-btn");
   const navUL = document.querySelector(".nav-list");
   const bars = document.querySelectorAll(".bar");

   hamburger.addEventListener("click", () => {
     navUL.classList.toggle("show");
     bars.forEach((element) => {
       element.classList.toggle("active");
     });
   });

// const hamburger = document.getElementById("burger");

// const havUl = document.getElementById("navUL");

// hamburger.addEventListener("click", () => {
//   navUL.classList.toggle("show");
//   hamburger.classList.toggle("active");
// });

// navUL.addEventListener("click", () => {
//   navUL.classList.remove("show");
//   hamburger.classList.remove("active");
// });

// navUL.addEventListener("click", () => {
//   navUL.classList.remove("show");
//   hamburger.classList.remove("active");
// });
