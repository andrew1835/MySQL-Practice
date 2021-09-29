var path = require("path");


module.exports = function (app) {



    app.get("/", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"))
    })

    app.get("/searched/:movie", function (req, res) {
        res.sendFile(path.join(__dirname, "../public/searched.html"))
        // you will write more code that searches the database for a match, and if there's a match, you add it to the searched.html document. If not, add "No match" to the document
    })

    app.get("/api/table", function (req, res) {
        // respond with all the information from the database table for this application
    })



    app.post("/api/table", function (req, res) {
        // database stuff. Here you will push the req.body to the database, and you will then res.json the req.body
    })



}