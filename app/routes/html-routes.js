var path = require("path")


module.exports = function (app) {


    app.get("/", function (req, res) {
        // I think you may also want to send the SQL information here
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/searched", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/searched.html"))
    })



}


// this file is good to go