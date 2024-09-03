const express = require('express');
const http = require('http');
const app = express();

app.use((req, res, next) => {
    console.log('1');
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(`<h1>Hello Express Middleware</h1>`);
    next();
});

app.use((req, res, next) => {
    console.log('2');
    req.user = 'King';
    next();
});

app.use((req, res, next) => {
    console.log('3');
    res.write(`<h2 style=color:red>${req.user}</h2>`);
    next();
});

app.get('/', (req, res) => {
    res.write(`<h2>GET방식으로 '/'로 요청 들어옴</h2>`);
    res.end();
});

app.get('/bye', (req, res) => {
    res.end('Bye');
});

http.createServer(app)
    .listen(3333, () => {
        console.log('http://localhost:3333');
    });