var express = require("express")


var app = express()
var PORT = process.env.PORT || 8080


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// Static directory to be served
app.use(express.static("app/public"))


// Routes
// =============================================================
require("./app/routes/api-routes.js")(app)
require("./app/routes/html-routes.js")(app)

app.listen(PORT, function () {
    console.log("App listening on http://localhost:" + PORT)
})


// this file is good to go