const aboutUs = document.getElementById("about-us");
const navbarSticky = document.getElementsByClassName("container-navbar");
var height = window.clientY;
const aboutUsButton = document.getElementsByClassName("info-button");
$(".info-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(aboutUs).offset().top }, 500);
});
document.addEventListener("scroll", (e) => {
  console.log(window.pageYOffset);
  if (window.pageYOffset >= 90) {
    navbarSticky[0].classList.add("scrolled-navbar");
  }
  if (window.pageYOffset <= 89) {
    navbarSticky[0].classList.remove("scrolled-navbar");
    console.log("hello");
  }
});
