const url = "https://solar-city.herokuapp.com";
// const url = "http://localhost:3000";

$(function() {
    // Count request
    $.ajax({
        type: "GET",
        url: url + "/interestCount",
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        success: function (data) {
            $('#countNum').html(data.count);
        }
    });

    // Add interest
    $("#interestForm").submit(function(e) {
        $.ajax({
            type: "POST",
            url: url + '/interest',
            data: $("#interestForm").serialize(),
            success: function(response)
            {
                var htmlAfterForm = "<p> Thank you for your response </p>";
                $('#interestForm').html(htmlAfterForm);
            }
        });

        e.preventDefault(); // avoid to execute the actual submit of the form.
    });
});