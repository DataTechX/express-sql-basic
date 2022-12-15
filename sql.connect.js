
// เชือมต่อ ฐานข้อมูล



const mysql = require('mysql2')
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'gggg'
})

conn.connect((err) => {
    if(err) {
        console.log('Error connection!!', err)
    }else {
        console.log('My Sql connected!!!')
    }
})

// let sql = "SELECT * FROM goodgame"

// conn.execute(sql, function(err, result) {
//     if(err) throw err;

//     console.log(result)
// })


module.exports = conn;

