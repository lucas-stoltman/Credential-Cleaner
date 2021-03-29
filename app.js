let http = require('http');
const port = 8081;

http.createServer(function (request, response) {

    // Send the HTTP header 
    // HTTP Status: 200 : OK
    // Content Type: text/plain
    response.writeHead(200, { 'Content-Type': 'text/plain' })

    // To be printed to the page
    response.end('Hello World!');

}).listen(port);

console.log(`Console running at http://127.0.0.1:${port}`);