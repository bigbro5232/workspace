// 미들웨러 : 로그를 남지는 미들웨어,
// 서버를 모니텅항고 디버깅용도로 사용
const express = require('express');
const morgan = require('morgan');
require('dotenv').config();
const port = process.env.PORT || 3333;
const app = express();

// morgan.format('myformat', ':method :url :status :response-time ms');
// app.use(morgan('myformat'));
// 사용자 정의 로그형식을 이용하고자 할때 format('포멧이름','포멧들')

app.use(morgan('dev'));

/*
'combined': Apache combined 로그 형식
'common': Apache common 로그 형식
'dev': 개발 중 사용하기 좋은 형식
'short': 짧은 로그 형식
'tiny': 더 간단한 로그 형식
*/

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`);
});

app.get('/post', (req, res) => {
    res.send(`<h1>Post</h1>`);
});

app.get('/mypage', (req, res) => {
    res.send(`<h1>MyPage</h1>`);
});

app.listen(port, () => {
    console.log((`http://localhost:${port}`));
});