module.exports = function (app, API) {
    // Get specific api
    app.get("/api/:id", function (req, res) {
        API.findOne({ where: { id: req.params.id } }).then(data => {
            res.json(data);
        });
    });

    // Add user rating
    app.put("/api/rate/:id", function (req, res) {
        // Do avg rating calculations here
        var n = parseInt(req.body.numRatings);
        var R = parseFloat(req.body.oldAvg);
        var r = parseInt(req.body.rating);
        var newAvgRating = (n * R + r) / (n + 1);

        API.update(
            {
                rating: Math.round(newAvgRating * 10) / 10,
                numRatings: n + 1
            },
            {
                where: {
                    id: req.body.id
                },
            }
        ).then(data => { res.json(data) });
    });

    // Add new api
    app.post("/api/add", function (req, res) {
        var newAPI = {
            name: req.body.name,
            link: req.body.link
        }
        if (req.body.rating) {
            newAPI.rating = req.body.rating;
            newAPI.numRatings = 1;
        }

        API.create(newAPI).then(data => {
            res.json(data)
        });
    });
}