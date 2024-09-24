const http = require('http');
const express = require('express');
const { dirname } = require('path');
const path = require('path');
const app = express();

const title = `자동차 목록`

// port 환경변수 등록
app.set('port', 3333);
// 뷰엔진 설정
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// static 폴더 설정
app.use(express.static(path.join(__dirname, 'public')));

//db애서 가져온 데이터로 대체되 임시 목록
const carList = [
    { _id: 1010, name: "A", price: 3500, company: "Z", year: 2019 },
    { _id: 1010, name: "B", price: 4500, company: "Y", year: 2029 },
    { _id: 1010, name: "C", price: 5500, company: "X", year: 2039 },
    { _id: 1010, name: "D", price: 6500, company: "W", year: 2049 },
];

app.get('/car/list', (req, res) => {
    // node,js 콜백함수의 첫번째 인자는 error객체
    req.app.render('car/list', { carList }, (err, html) => {
        if (err) throw err;
        res.end(html);
    });
});

const server = http.createServer(app);
server.listen(app.get('port'), () => {
    console.log(`http://localhost:${app.get('port')}`);
});