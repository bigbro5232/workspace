const http = require('http');
const fs = require('fs');
const path = require('path');

http.createServer((req, res) => {
    if (req.url === '/') {
        // fsdml readFil()이용해서 읽은 내용을 출력
        const filePath = path.join('public', 'index.html');
        console.log('filePath: ', filePath);
        console.log(path.resolve(filePath));
        fs.readFile(filePath, 'utf-8', (err, data) => {
            if (err) {
                console.log('no file', err);
                throw err;
            }
            res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
            res.write(data);
            res.end();
        })

    } else if (req.url === '/login') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write(`<h2 style='color:green'>Login Page</h2>`);
        res.write(`<a href='/'>index page</a>`)
        res.end();
    } else if (req.url === '/board') {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
        res.write(`<h2 style='color:maroon'>BoardPage</h2>`);
        res.write(`<a href='/'>index page</a>`)
        res.end();
    }
}).listen(3333, () => {
    console.log('http://localhost:3333');

})