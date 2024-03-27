$(document).ready(function() {
    $('#submitBtn').click(function(e) {
        e.preventDefault();
        var enteredPassword = $('#password').val();
        var correctPassword = "your_password_here"; // Change this to your desired password

        if (enteredPassword === correctPassword) {
            window.location.href = "protected_page.html";
        } else {
            $('#errorMsg').text("Incorrect password. Please try again.");
        }
    });
});
