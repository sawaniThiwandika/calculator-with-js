$(document).ready(function() {
    $('#btnArea .input').on('click', function() {
        let buttonText = $(this).text();
        $('#textField').append(buttonText);
    });

    $('#btnC').on('click', function() {
        $('#textField').text('');
    });

    $('#btnEqual').on('click', function() {
        let text = $("#textField").text();
        console.log(text);
        try {
            let result = eval(text);
            $('#textField').text(result);
        } catch (error) {
            console.error("Invalid expression:", error);
            $('#textField').text('Error');
        }
    });

});