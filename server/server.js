const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

app.get('/hi', (req, res) => {
    res.send('yoooo')
  });

app.listen(3000);