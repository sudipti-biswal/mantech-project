const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);
const plusIcon = document.querySelector(".plusIcon");
const navMenuTwo = document.querySelector(".nav-menu-two");

plusIcon.addEventListener("click", () => {
  plusIcon.classList.toggle("active");
  navMenuTwo.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    plusIcon.classList.remove("active");
    navMenuTwo.classList.remove("active");
  })
);
