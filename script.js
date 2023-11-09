let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".contact-info");

//toggling the navbar on the burger
document.querySelector("#menu-btn").onclick = () => {
  navbar.classList.toggle("active");
};

//open/close the contacts -bar (info-btn)
document.querySelector("#info-btn").onclick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onclick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

//carousel from swiperjs.com
const swiper = new Swiper(".hero-carousel", {
  
  loop: true,
  grabCursor: true,
  autoplay: {
    delay: 4000},
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

