//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Activate Bootstrap scrollspy on the main nav element
    const sideNav = document.body.querySelector('#sideNav');
    if (sideNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#sideNav',
            rootMargin: '0px 0px -40%',
        });
    };

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

});

    const navLinks = document.querySelectorAll(".nav-link.js-scroll-trigger");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Hide all sections
            const sections = document.querySelectorAll(".resume-section");
            sections.forEach(section => {
                section.classList.remove("active");
            });

            // Show the clicked section
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).classList.add("active");
        });
    });
});


