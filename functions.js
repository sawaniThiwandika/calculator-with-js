$(document).ready(function() {
    $('#btnArea .input').on('click', function() {
        let buttonText = $(this).text();
        $('#textField').append(buttonText);
    });

});