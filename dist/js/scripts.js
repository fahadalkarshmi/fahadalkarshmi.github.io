window.addEventListener('DOMContentLoaded', event => {

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Our custom show/hide logic for sections
    const navLinks = document.querySelectorAll(".nav-link.js-scroll-trigger");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation(); // Stop event propagation

            // Remove the active class from all sections
            const sections = document.querySelectorAll(".fade-in-section");
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Add the active class to the clicked section
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).classList.add("active");
        });
    });

});
Additionally, since we're disabling the scrollspy from Bootstrap, you can safely remove the scrollspy initialization code:

javascript
Copy code
// Remove this block from your code
/*
const sideNav = document.body.querySelector('#sideNav');
if (sideNav) {
    new bootstrap.ScrollSpy(document.body, {
        target: '#sideNav',
        rootMargin: '0px 0px -40%',
    });
};
*/

After implementing these changes, the sections should toggle correctly based on the navigation link clicks without interference from other scripts. If you continue to experience issues, please let me know, and we'll troubleshoot further.






