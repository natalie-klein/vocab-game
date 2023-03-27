const express = require('express');
const app = express();
// const path = require('path');
const webpack = require('webpack');
const cors = require('cors');

app.use(cors());

app.get('/hi', (req, res) => {
    res.send('yoooo')
  });

app.listen(3000);