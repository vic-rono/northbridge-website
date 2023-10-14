let navbar = document.querySelector('.header .navbar');

//toggling the navbar on the burger
document.querySelector('menu-btn').onClick = () => {
    navbar.classList.toggle('active')
}