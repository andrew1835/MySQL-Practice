// will have to write a function that runs a table query. Will look something like:

function runTableQuery() {
    $.ajax({ url: "/api/table", method: "GET" })
        .then(function (tableData) {
            console.log(tableData)
            for (var i = 0; i < tableData.length; i++) {

                // code that appends it to the index.html document in olDB

            }
        })
}

// below is a function that will run when you submit a new movie to the database

function addMovie(event) {
    event.preventDefault()

    var newMovie = {
        // object with a number of key:value pairs that will be added to the database
    }

    console.log(newMovie)

    // below, newMovie is the req.body that you pass on for express to take care of in your routes.js file when a post request comes through to /api/table
    $.post("/api/table", newMovie, function (data) {
        if (data) {
            alert("Succesfully added")
        }
        else {
            alert("Something went wrong")
        }
    })
}