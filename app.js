const express = require('express');
const app = express();

app.use(express.json());

// เรียกใช้ router
const root = require('./router/root')
app.use(`/`, root)

// ทดสอบ
const db = require('./sql.connect')
app.get('/aaa', (req,res) => {
    let sql = "SELECT * FROM goodgame"
    db.execute(sql, function(err, result) {
        if(err) throw err;
        console.log(result)
        return res.status(201).json({result})
    })
})

app.listen(3000)
console.log('Server Start!!!')
