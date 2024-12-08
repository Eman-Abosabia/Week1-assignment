const http = require('http');
const fs = require('fs');
const path = require('path');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    const filePath = path.join(__dirname, 'index.html');  // Get the path to index.html
    fs.readFile(filePath, (err, content) => {
        if (err) {
            res.writeHead(500);
            res.end('Error loading the file');
        } else {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(content);  // Send the HTML content as a response
        }
    });
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
