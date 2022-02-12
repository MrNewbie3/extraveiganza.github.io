const aboutUs = document.getElementById("about-us");
const navbarItem = document.querySelectorAll(".container-navbar ul li a");
const navbarSticky = document.querySelectorAll(".container-navbar");
$(".info-button, .about-us-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(aboutUs).offset().top - 100 }, 500);
});
$(".home-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("header").offset().top }, 500);
});
document.addEventListener("scroll", () => {
  if (window.pageYOffset >= 90) {
    navbarSticky[0].classList.add("scrolled-navbar");
    navbarSticky[0].classList.add("animated-navbar");
    if (window.pageYOffset > aboutUs.clientHeight) {
      navbarItem.forEach((e) => {
        e.classList.add("blacktext");
      });
    } else {
      navbarItem.forEach((e) => {
        e.classList.remove("blacktext");
      });
    }
  }
  if (window.pageYOffset <= 89) {
    navbarSticky[0].classList.remove("scrolled-navbar");
    navbarSticky[0].classList.remove("animated-navbar");
  }
});
