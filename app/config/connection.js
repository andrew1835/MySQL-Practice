var mysql = require("mysql");
var path = require("path")

var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "password",
    database: "moviesDB"
});

connection.connect((err) => {
    if (err) {
        console.error("Cannot connect to database")
    }
    console.log(`connected as id ${connection.threadId}`)
})

module.exports = connection

// this file is good to go