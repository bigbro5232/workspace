const express = require('express');
const cors = require('cors');
const mysql = require('mysql2/promise');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3333;

// 미들웨어 설정
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
let db;


(async () => {
    try {
        db = await mysql.createConnection({
            host: 'localhost',
            user: 'kosta',
            password: '1234',
            database: 'studydb',
            port: 3306
        });
        // console.log('DB접속 성공', db);
        const sql = `SELECT idx, name, userid, tel, indate FROM user WHERE idx=1`;
        const [data] = await db.query(sql);
        console.log(data);

    } catch (err) {
        console.error('DB접속 실패: ' + err);
    }
})();

app.get('/', (req, res) => {
    res.redirect('/dbtest');
})

app.get('/dbtest', async (req, res) => {
    try {
        const sql = `SELECT * FROM user ORDER BY idx DESC`;
        const [data] = await db.query(sql);
        console.log(data);
        db.end();
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});



app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});