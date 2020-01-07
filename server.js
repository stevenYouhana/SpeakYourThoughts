const express = require('express');
const app = express();

app.get('/hey', (req, res) => res.send('ho!'))

app.get('/others', (req, res) => {
  console.log("app.get('/others");
  res.send('here are others thoughts');
});

app.listen(8080)
