// var searchButton = document.getElementById("searchButton")

// searchButton.addEventListener("click", function (event) {
//     event.preventDefault()
//     console.log(event.path[1].childNodes[3].value)
//     var searchedMovie = event.path[1].childNodes[3].value

//     $.get("/api/searched/" + searchedMovie, function (data) {
//         var result = document.getElementById("result")
//         result.innerHTML = data[0].name
//     })

//     // window.location = "../searched.html"
//     // make a get request to /searched, and a get request to the /api/searched/nameOfMovie
// })