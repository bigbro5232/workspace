// server.js
const express = require('express');
const cors = require('cors');
const apiRouter = require('./routes/apiRouter');

const app = express();

app.use(cors()); // CORS 미들웨어를 먼저 사용
app.use('/', apiRouter);

const PORT = 3000; // 포트 번호 하드코딩
app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});
