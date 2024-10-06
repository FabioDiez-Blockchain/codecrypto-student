const mysql = require("mysql8");
var pool = mysql.createPool ({
    connectionLimit: 10,
    host: "localhost",
    user: "root",
    database: "northwind",
    port: 3306,
    password: "my-secret-pw"

    
  
})

function q (sql, parameter) {
    return new Promise((resolve, reject) => {
        pool.query(sql, parameter, function(error, results, fields) {
            if (error) {
                reject(error)
                return
            }
            return resolve([results, fields])
        })

    })
}
module.exports = {q}