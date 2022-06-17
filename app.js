const express = require('express');
const exhbs = require('express-handlebars');

const app = express();

app.use(express.static('public'));
app.set('view engine', 'hbs');
app.engine(
  'hbs',
  exhbs({
    extname: 'hbs',
  }),
);

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
