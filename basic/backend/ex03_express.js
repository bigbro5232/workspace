const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`<h2>Hello Express</h2>`);

});

app.get('/killer', (req, res) => {
    res.status(405).send();
})

app.listen(3333, () => {
    console.log('http://localhost:3333');
});