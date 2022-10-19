

const express = require('express');
const categories = require('./Data/categories.json');
const cors = require('cors');
const app = express();
const port = 5004;


app.use(cors());

app.get('/', (req, res) => {

    res.send('Hellow Express Js 215019');
})

app.get('/news-categories', (req, res) => {

    res.send(categories);
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
})