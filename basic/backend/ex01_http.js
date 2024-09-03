const http = require('http');
const server = http.createServer();

server.on('connection', function (socket) {
    console.log("Connection On");

    const serverIp = socket.address();
    console.log(serverIp);
    console.log("===============");


    const clientIp = socket.remoteAddress;
    console.log(clientIp + " is request " + serverIp.address);

})

server.on('close', function () {
    console.log("Close on");
})

server.on('request', function (req, res) {
    console.log("Request on");
    res.writeHead(200, { 'Content-Type': 'text/html; charset=UTF-8' });
    res.write('<h2>Hello Node Server</h2>');
    res.write(`<h2>Hello?</h2>`);
    res.end();
})

server.listen(3333, function () {
    console.log(("http://172.30.1.23:3333"));
})

// setTimeout(() => {
//     server.close(() => {
//         console.log('server shutdown');

//     })
// }, 3000);