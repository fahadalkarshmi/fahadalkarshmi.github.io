document.addEventListener("DOMContentLoaded", function() {
    const navLinks = document.querySelectorAll(".nav-link.js-scroll-trigger");
    navLinks.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            // Hide all sections
            const sections = document.querySelectorAll(".fade-in-section");
            sections.forEach(section => {
                section.style.display = "none";
            });

            // Show the section related to the clicked link
            const targetId = this.getAttribute("href");
            document.querySelector(targetId).style.display = "block";
        });
    });
});
