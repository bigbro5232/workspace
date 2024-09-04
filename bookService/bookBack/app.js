// app.js
const express = require('express');
require('dotenv').config();
const morgan = require('morgan');
const path = require('path');
const { dlopen } = require('process');
const cors = require('cors');
const bookRouter = require('./routes/bookRouter');
const userRouter = require('./routes/userRouter');
const naverRouter = require('./routes/naverRouter');

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
app.use('/books', bookRouter);
app.use('/users', userRouter);
app.use('/naver', naverRouter);

app.listen(port, () => {
    console.log(`http://localhost:${port}`);

});
