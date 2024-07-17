// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger

const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
const lis = navMenu.querySelectorAll("li a");

hamburger.addEventListener("click", function (e) {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("active");
  e.preventDefault();
});

for (li of lis) {
  li.addEventListener("click", function () {
    navMenu.classList.remove("active");
    hamburger.classList.toggle("hamburger-active");
  });
}

// // Dark Mode
// const darkToggles = document.querySelectorAll("#darkmode");
// const html = document.querySelector("html");

// for (darkToggle of darkToggles) {
//   darkToggle.addEventListener("click", function () {
//     html.classList.toggle("dark");
//   });
// }

// AOS
AOS.init();

// Canvas Confetti
const btnConfetti = document.querySelector("#btn-confetti");
btnConfetti.addEventListener("mouseover", () => {
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 },
  });
});

// Swiper js
var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
