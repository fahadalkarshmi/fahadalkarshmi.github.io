document.addEventListener('DOMContentLoaded', function() {
    // Get all sections
    const sections = document.querySelectorAll('.resume-section');

    sections.forEach(function(section) {
        section.addEventListener('click', function() {
            // Hide all sections
            sections.forEach(sec => sec.style.display = 'none');

            // Show the clicked section
            section.style.display = 'block';
        });
    });
});
