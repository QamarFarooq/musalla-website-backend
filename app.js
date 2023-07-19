const http = require('http');

const express = require('express');

const app = express();

app.use((req, res, next) => {
    console.log("I am executed!!!!!!!!");
});

const server = http.createServer(app);

server.listen(8081);