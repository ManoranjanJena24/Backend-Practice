var http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/plain' });
    res.write('Hello World');
    res.end();
});

const PORT = 3000;

server.listen(PORT, () => {
    console.log(`Server is running on port http://localhost:3000/ and port number is ${PORT}`);
});
