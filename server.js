// Importing the http module
const http = require('http');

const myName = 'Manoranjan';

// Creating a server
const server = http.createServer((req, res) => {
    // Sending a response with your name
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end(`Hello, ${myName}!\n`);

    // Logging your name to the console
    console.log(`Received a request from the browser. Your name: ${myName}`);
});

// Setting up the server to listen on port 4000
const PORT = 4000;
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}/`);
});
