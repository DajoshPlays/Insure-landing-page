// let menuIcon = document.querySelector(".nav-bars");
// let mobileNav = document.querySelector(".mobile-nav")

// menuIcon.addEventListener("click", function(){
//     mobileNav.style.display = "flex";
// })


document.addEventListener('DOMContentLoaded', () => {
    const navBars = document.querySelector('.nav-bars'); 
    const mobileNav = document.querySelector('.mobile-nav');

    // Toggle mobile navigation on hamburger click
    navBars.addEventListener('click', () => {
        mobileNav.classList.toggle('nav-active'); 
    });

    document.addEventListener('click', (event) => {
        if (!mobileNav.contains(event.target) && !navBars.contains(event.target)) {
            mobileNav.classList.remove('nav-active');
        }
    });
});