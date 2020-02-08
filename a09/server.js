const data = require('./data');
const express = require('express');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/user', (req, res) => {
    res.send(data);
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);