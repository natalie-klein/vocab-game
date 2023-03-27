const express = require('express');
const cors = require('cors');

const db = require('../database')

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/fromdb', (req, res) => {
    db.query('SELECT * FROM "testing" ', (err,result) => {
        res.send(result);
    })  
});

app.get('/languages', (req, res) => {
    db.query('SELECT * FROM "languages" ', (err,result) => {
        res.send(result);
    })  
});

app.listen(PORT);