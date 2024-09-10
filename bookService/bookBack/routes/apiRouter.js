// apiRouter.js
const express = require('express');
const router = express.Router();
const pool = require('../db');

// 데이터베이스에서 데이터를 가져오는 라우트
router.get('/markets', async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM markets');
        res.json(rows);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
