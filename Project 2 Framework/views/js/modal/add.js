// Post request new api to be added to database
$(function () {
    $("#addIt").click(function (event) {
        event.preventDefault();
        var newAPI = {
            name: $("#modal-name").val(),
            link: $("#modal-link").val()
        }
        var rating = $("#modal-rating").val();
        if (rating) {
            newAPI.rating = rating;
        }

        $.post("/api/add", newAPI).then(data => {
            console.log("post successful")
            location.reload();
        });
    });
});