const navToggle = document.getElementById("nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navBar = document.querySelector(".navbar");

navToggle.addEventListener('click', function() {
    console.log("working");
    console.log(navBar.classList);

    // if (navBar.classList.contains('show-area')) {
    //     navBar.classList.remove('show-area');
    // } else {
    //     navBar.classList.add('show-area');
    // }

    //  if (navLinks.classList.contains('show-links')) {
    //     navLinks.classList.remove('show-links');
    // } else {
    //     navLinks.classList.add('show-links');
    // }

    // toggle can do all this functionality with just one line
    navBar.classList.toggle('show-area');
    navLinks.classList.toggle('show-links');
});
