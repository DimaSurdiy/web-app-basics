const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1><h2>Это страничка /</h2>');

  console.log(req.url);
});

app.get('/about', (req, res) => {
  res.send('<h2>Это страничка About</h2>');

  console.log(req.url);
});

app.listen(4444, () => {
  console.log(`Application server is running on port ${4444}`);
});
