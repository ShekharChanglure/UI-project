document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');
    const smoothScrollLinks = document.querySelectorAll('a[href^="#"]');

    // Toggle Navigation Menu
    function toggleNav() {
        nav.classList.toggle('nav-active');
        burger.classList.toggle('toggle');

        navLinks.forEach((link, index) => {
            link.style.animation = nav.classList.contains('nav-active')
                ? `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`
                : '';
        });
    }

    burger.addEventListener('click', toggleNav);

    // Close Navigation on Link Click (for mobile)
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (nav.classList.contains('nav-active')) {
                toggleNav();
            }
        });
    });

    // Smooth Scrolling
    smoothScrollLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            window.scrollTo({
                top: targetElement.offsetTop - 70, // Adjust based on header height
                behavior: 'smooth'
            });
        });
    });
});
