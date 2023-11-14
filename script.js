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

const projects = new Swiper(".projects", ".box-container", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


//light-gallery
document.addEventListener('projects', function () {
  //var showGalleryBtn = document.getElementById('showGallery');
  var galleryContainer = document.querySelector('.box-container');

  galleryContainer.addEventListener('click', function () {
      // Array of image URLs
      var images = [
          'images/sossion.jpg',
          'images/sossion2.jpg',
          'images/sossion4.jpg'
          // Add more images as needed
      ];

      // Dynamically generate HTML for each image
      var imagesHTML = images.map(function (image) {
          return '<a href="' + image + '"><img src="' + image + '"></a>';
      }).join('');

      // Insert images into the gallery container
      galleryContainer.innerHTML = imagesHTML;

      // Initialize lightGallery
      lightGallery(galleryContainer, {
          mode: 'lg-fade', // Set your desired transition mode
          thumbnail: true, // Enable thumbnails if needed
          download: false, // Disable download button
          // Add more options as needed
      });
  });
});
