var express = require("express"),
    app = express();

app.get("/", function (req, res) {
    res.send("Yayy! You did it :)");
});

var server = app.listen(process.env.PORT||3000, process.env.IP, function () {
    console.log("Server Started!");
});
