const http = require('http');

const PORT = 3333;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write(`<!DOCTYPE html>
                <html>
                    <head>
                        <title>Node.js</title>
                    </head>
                    <body>
                        <h2>Hello World</h2>
                        <h2>Hello</h2>
                    </body>
                </html>`);
    res.end();
});


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});