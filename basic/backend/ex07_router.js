const express = require('express');
const http = require('http');
const app = express();

app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/main', (req, res) => {
    res.sendFile(__dirname + '/public/main.html');
})
// 클라이언트가 보낸 데이터 받는 방법
// 1.query string데이터 : req.query 로 받는다(get방식)
// 2.요청 경로에 포함된 데이터: req.params로 받는다.
// 3.post방식으로 요청된 데이터: req.body 로 받는다 --> 설정필요(express body-parser)
app.get('/api/users', (req, res) => {
    console.log(req.query);
    const { page, per_page } = req.query;
    const str = `
        <h3>page: ${page}</h3>
        <h3>per_page: ${per_page}</h3>
        <br><a href='/main'>main</a>
    `;
    res.send(str);
});

app.get('/api/board/:no', (req, res) => {
    console.log(req.params);
    const { no } = req.params;
    res.send(`<h3>${no}</h3>
        <br><a href='/main'>main</a>
        `);
});
// get방식으로 signin요청이 들어오면 rex.senFile()이용하여 signIn.html
app.get('/signin', (req, res) => {
    res.sendFile(__dirname + '/public/signin.html');
});

app.get('/signin2', (req, res) => {
    res.sendFile(__dirname + '/public/signin2.html');
});

app.get('/signinProc', (req, res) => {
    const { userId, userPw } = req.query;
    if (userId === 'killer') {
        res.status(405).send();
    } else {
        res.send(`<h2 style='color:maroon'>Hello ${userId}</h2>`);
    }
});

app.post('/signinProc', (req, res) => {
    console.log(req.body);
    const { userId, userPw } = req.body;
    if (userId === 'killer') {
        res.status(405).send();
    } else {
        res.send(`<h2 style='color:green'>Hello ${userId}</h2>`);
    }
});

app.post('/signinProc2', (res, req) => {
    const uid = req.body.userId;
    const upw = req.body.userPw;
    if (uid === 'killer') {
        res.json({ 'status': 405, 'message': 'Fail' });
    } else {
        res.json({ 'status': 200, 'message': `Hello ${uid}` });
    }
});

app.get('*', (req, res) => {
    res.status(404).send();
})

app.listen(3333, () => {
    console.log('http://localhost:3333');
});
