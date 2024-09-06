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

// MySQL 커넥션풀 설정
const pool = mysql.createPool({
    host: 'localhost',
    user: 'kosta',
    password: '1234',
    port: 3306,
    database: 'studydb',
    connectionLimit: 10,
    waitForConnections: true
});

app.get('/', async (req, res) => {
    const sql = `SELECT * FROM user`;
    try {
        const [data] = await pool.query(sql)
        res.send(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});