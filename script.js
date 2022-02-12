const aboutUs = document.getElementById("about-us");
const navbarSticky = document.getElementsByClassName("container-navbar");
var aboutUsCounted = aboutUs.clientHeight - 100;
var height = window.clientY;
const aboutUsButton = document.getElementsByClassName("info-button");
aboutUsButton[0].addEventListener("click", () => {
  window.scrollTo(0, aboutUsCounted);
});
document.addEventListener("scroll", (e) => {
  if (window.pageYOffset >= 60) {
  }
});
