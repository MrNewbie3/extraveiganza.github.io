const aboutUs = document.getElementById("about-us");
const navbarItem = document.querySelectorAll(".container-navbar ul li a");
const navbarSticky = document.querySelectorAll(".container-navbar");
const clicky = document.getElementsByClassName("icon");
$(".info-button, .about-us-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(aboutUs).offset().top - 100 }, 500);
});
$(".home-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $("header").offset().top }, 500);
});
$(".profile-button").on("click", function (e) {
  e.preventDefault();
  $("html, body").animate({ scrollTop: $(".buAulia").offset().top - 100 }, 500);
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
console.log();
const scriptURL = "https://script.google.com/macros/s/AKfycbzr_HDBkZ6d1YxAl8KQzLDcv0Ix1hApMsgLuCxT53rImUpb9veSmcUrqReU0hYUl5z0/exec";
const form = document.forms["feedback-Users"];
const kirim = document.querySelector(".kirim");
const loading = document.querySelector(".loading");
const alertt = document.querySelector(".alert");

form.addEventListener("submit", (e) => {
  loading.classList.toggle("disable");
  kirim.classList.toggle("disable");
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      kirim.classList.toggle("disable");
      alertt.classList.toggle("disable");
      loading.classList.toggle("disable");
      setTimeout(() => {
        alertt.classList.toggle("disable");
      }, 3000);
      form.reset();
      console.log("Success!", response);
    })
    .catch((error) => console.error("Error!", error.message));
});
