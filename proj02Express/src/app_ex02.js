const http = require('http');

const PORT = 3333;

const title = `템플릿을 이용한 출력`
const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
</head>
<body>
    <h2>${title}</h2>
    <h3>Hello World</h3>
</body>
</html>`;

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.end(html);
});


server.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});