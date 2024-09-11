// apiRouter.js
const express = require('express');
const router = express.Router();
const pool = require('./dbPool');

// 모든 시장 데이터를 가져오는 라우트
router.get('/markets', async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM markets');
        res.json(data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// 특정 시장의 상세 데이터를 가져오는 라우트
router.get('/markets/:id', async (req, res) => {
    try {
        const [data] = await pool.query('SELECT * FROM markets WHERE id = ?', [req.params.id]);
        if (data.length === 0) {
            res.status(404).send('Market not found');
        } else {
            res.json(data[0]);
        }
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

module.exports = router;
