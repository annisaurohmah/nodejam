// const http = require('http');

// //this is command to create server
// const server = http.createServer((req, res) => {
//     const url = req.url;

//     if(url == "/"){
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(
//             { message: 'Hello World!!!' }));
//     }
//     else if(url == "/profile"){
//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(
//             { message: 'About Us' }));
//     }
//     else{
//         res.writeHead(404, { 'Content-Type': 'application/json' });
//         res.end(JSON.stringify(
//             { message: 'Not Found' }));
//     }
// });

// //     res.writeHead(200, { 'Content-Type': 'application/json' });
// //     res.end(JSON.stringify(
// //         { message: 'Hello World!!!' }));
// //     });

// server.listen(3000, () => {
//     console.log('Server running at http://localhost:3000/');
//     });


const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Welcome');
    });

app.listen(8000, () => {
    console.log('Server running at http://localhost:8000/');
    });