// server.js
const http = require('http');
const greet = require('./myModule'); // Importing the custom module

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    
    // Use the imported module
    const greetingMessage = greet('User');
    res.end(greetingMessage);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
