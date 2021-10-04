$.get("/api/all", function (data) {
    if (data.length !== 0) {
        for (let i = 0; i < data.length; i++) {
            var ol = document.getElementById("olDB")
            var li = document.createElement("li")
            li.innerHTML = data[i].name
            ol.appendChild(li)
        }
    }
})


var addButton = document.getElementById("addButton")

addButton.addEventListener("click", function (event) {
    event.preventDefault()

    var newMovie = {
        name: document.getElementById("addInput").value.trim()
    }

    console.log(newMovie)

    $.post("/api/new", newMovie)
        .then(function () {
            var ol = document.getElementById("olDB")
            var li = document.createElement("li")
            li.innerHTML = newMovie.name
            ol.appendChild(li)
        })


    document.getElementById("addInput").value = ""
})



var searchButton = document.getElementById("searchButton")

searchButton.addEventListener("click", function (event) {
    event.preventDefault()
    var searchedMovie = document.getElementById("searchInput").value

    $.get("/api/searched/" + searchedMovie, function (data) {
        var result = document.getElementById("result")
        if (data.length == 0) {
            result.innerHTML = "Movie not in database"
        }
        else {
            result.innerHTML = data[0].name
        }


    })

    // window.location = "../searched.html"
    // make a get request to /searched, and a get request to the /api/searched/nameOfMovie
})

