let navbar = document.querySelector(".header .navbar");
let contactInfo = document.querySelector(".contact-info");
//toggling the navbar on the burger
document.querySelector("menu-btn").onClick = () => {
  navbar.classList.toggle("active");
};

//open/close the contacts -bar (info-btn)
document.querySelector("#info-btn").onClick = () => {
  contactInfo.classList.add("active");
};

document.querySelector("#close-contact-info").onClick = () => {
  contactInfo.classList.remove("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
  contactInfo.classList.remove("active");
};

const swiper = new Swiper(".hero-carousel", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
