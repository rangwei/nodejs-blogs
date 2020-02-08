const data = require('./data');
const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();

app.get('/user', (req, res) => {
    res.send(data);
});

app.listen(PORT);