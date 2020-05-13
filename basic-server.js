const http = require('http');
const server = http.createServer((req, resp) => {
    resp.setHeader('Content-type', 'application/json');
    resp.setHeader('Access-Control-Allow-Origin', '*');
    resp.writeHead(200);
    resp.end("Web Server Working!");
});

server.listen(3000, () => console.log('Listening port 3000'));