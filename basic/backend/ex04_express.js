const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.get('/index', (req, res) => {
    console.log(__dirname + '/public/index.html');

    res.sendFile(__dirname + '/public/index.html');
});

app.get('/login', (req, res) => {
    // res.sendFile(__dirname + '/public/images/image1.png')
    const str = `<h1>Login Page</h1>
    <img src="/images/image1.png">
    `;
    res.send(str);
});

app.get('/board', (req, res) => {
    res.sendFile(__dirname + '/public/images/image2.png');
});

app.listen(3333, () => {
    console.log('http://localhost:3333');
});