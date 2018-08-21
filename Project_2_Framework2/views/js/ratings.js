$(function () {
    // Add click handler for all stars
    $(".srating").click(function () {
        // Get clicked api from db table
        $.get("/api/" + $(this).attr("dbid")
        ).then(function (data) {
            // data.rating will be null if api not rated yet
            if (data.rating) {
                var oldAvg = data.rating;
            } else { oldAvg = 0 }

            var rating = $("#vote" + data.id).html();

            // Send data for the update
            $.ajax({
                url: "/api/rate/" + data.id,
                type: "PUT",
                data: {
                    id: data.id,
                    oldAvg: oldAvg,
                    rating: rating,
                    numRatings: data.numRatings
                }
            }).then(function () {
                location.reload();
            });
        });
    });
});