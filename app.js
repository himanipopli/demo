var express = require("express"),
    app = express();

app.get("/", function (req, res) {
    res.send("Yayy! You did it :)");
});

var server = app.listen(3000, '13.68.155.171', function () {
    console.log("Server Started!");
});
