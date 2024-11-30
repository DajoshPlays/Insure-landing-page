// let menuIcon = document.querySelector(".nav-bars");
// let mobileNav = document.querySelector(".mobile-nav")

// menuIcon.addEventListener("click", function(){
//     mobileNav.style.display = "flex";
// })


document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelector('.nav-bars'); // Hamburger icon
    const mobileNav = document.querySelector('.mobile-nav'); // Mobile nav container

    // Toggle mobile navigation on hamburger click
    navBars.addEventListener('click', () => {
        mobileNav.classList.toggle('nav-active'); // Add or remove the nav-active class
    });

    // Optional: Add functionality to close the menu when clicking outside
    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !navBars.contains(event.target)) {
            mobileNav.classList.remove('nav-active');
        }
    });
});