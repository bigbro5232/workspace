const express = require('express');
const app = express();

app.use((req, resm, next) => {
    console.log('logging...', req.url);
    next();
})

app.get('/', (req, res) => {
    res.send(`<h2>Hello World</h2>`);
});

app.get('/bye', (req, res) => {
    res.send(`<h2>Bye</h2>`);
});

app.listen(3333, () => {
    console.log('http://localhost:3333');
});