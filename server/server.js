const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());

app.get('/hi', (req, res) => {
    res.send('yoooo')
  });

app.listen(3000);