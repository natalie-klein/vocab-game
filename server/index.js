const express = require('express');
const cors = require('cors');

const db = require('../database')

const app = express();
app.use(cors());

const PORT = 3000;

app.get('/fromdb', (req, res) => {
    db.query('SELECT * FROM "public"."testing" ', (err,result) => {
        res.send(result);
    })  
});

app.get('/languages', (req, res) => {
  db.query('SELECT * FROM "public"."languages" ', (err,result) => {
      res.send(result);
  })  
});

app.listen(PORT);