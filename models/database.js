var mysql = require('mysql');
var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'laptop_shop'
})

db.connect(function (err) {
    if (err) {
        console.log("Database is connected successfully!");
    }
});

module.exports = db;