//routes is function here

// const http = require('http');

// const routes = require('./routes')

// const server = http.createServer(routes);

// server.listen(3000);

// ---------------------------------------------

// routes is object here 

const http = require('http');

const routes = require('./routes')

console.log(routes.someText)

const server = http.createServer(routes.handler);

server.listen(3000);

