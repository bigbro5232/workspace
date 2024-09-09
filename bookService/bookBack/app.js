// app.js
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const bookRouter = require('./routes/bookRouter');
const userRouter = require('./routes/userRouter');
const naverRouter = require('./routes/naverRouter');
const indexRouter = require('./routes/indexRouter');
const bookDBRouter = require('./routes/bookDBRouter');
const testRouter = require('./routes/testRouter');
require('dotenv').config();
// const { dlopen } = require('process');

const port = process.eventNames.PORT || 3333;

const app = express();

const corsOption = {
    origin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
}
// 미들웨어 설정
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(morgan('dev'));
app.use(cors(corsOption));

app.use('/', indexRouter);
app.use('/books', bookRouter); //배열 사용
app.use('/api/books', bookDBRouter); //DB연동
app.use('/users', userRouter);
app.use('/naver', naverRouter);
app.use('/test', testRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

});
