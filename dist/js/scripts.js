$(document).ready(function() {
    // When any navigation link is clicked
    $('a[data-toggle="collapse"]').on('click', function(e) {
        e.preventDefault();

        // Get the target section's ID from the clicked link's href attribute
        var targetId = $(this).attr('href');

        // First, hide all sections
        $('.resume-section').hide();

        // Then, show only the target section
        $(targetId).show();
    });
});
