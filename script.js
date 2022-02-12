const aboutUs = document.getElementById("about-us");
const navbarSticky = document.getElementsByClassName("container-navbar");
var aboutUsCounted = aboutUs.clientHeight - 100;
var height = window.clientY;
const aboutUsButton = document.getElementsByClassName("info-button");
$(".info-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(aboutUs).offset().top }, 800);
});
document.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 60) {
  }
});
