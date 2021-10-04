var connection = require("../config/connection.js")

module.exports = function (app) {

    app.get("/api/all", function (req, res) {
        var dbQuery = "SELECT * FROM films"

        connection.query(dbQuery, function (err, result) {
            if (err) throw err
            res.json(result)
        })
    })

    app.post("/api/new", function (req, res) {
        console.log("New movie: ")
        console.log(req.body)

        var dbQuery = "INSERT INTO films (name) VALUES (?)"

        connection.query(dbQuery, req.body.name, function (err, result) {
            if (err) throw err
            console.log("Movie Successfuly Saved!")
            res.end()
        })
    })

    app.get("/api/searched/:movie", function (req, res) {
        var dbQuery = "SELECT name FROM films WHERE (films.name = ?)"

        connection.query(dbQuery, req.params.movie, function (err, result) {
            if (err) throw err
            console.log(`Searched for ${req.params.movie}`)
            console.log(result)
            res.json(result)
        })
    })

}