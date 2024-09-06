const express = require('express');
const router = express.Router();
const axios = require('axios');
require('dotenv').config();

const client_id = process.env.Naver_id;
const client_secret = process.env.Naver_secret;

router.get('/', (req, res) => {
    res.send(`<a href='/naver/search/books'>네이버 도서검색(Node) 테스트</a>`);
})

router.get('/search/books', async (req, res) => {
    let { query, display, start } = req.query;
    if (!query) {
        query = 'Node'; //기본 검색어를 Node로 설정
    }
    if (!start) {
        start = 1;
    }
    if (!display) {
        display = 20;
    }
    var api_url = 'https://openapi.naver.com/v1/search/book.json?query='
        + encodeURI(query) + `&start=${start}&display=${display}`; // JSON 결과
    console.log(api_url);
    try {
        const response = await axios.get(api_url, {
            headers: {
                'X-Naver-Client-Id': client_id,
                'X-Naver-Client-Secret': client_secret
            }
        });
        // 응답 데이터 받기
        const data = await response.data;
        res.status(200).json(data);
    } catch (err) {
        console.log(err);
        res.status(500).send(err.message);

    }

});
module.exports = router;