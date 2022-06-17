const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');

const app = express();

app.use(express.static('public'));

app.engine(
  'hbs',
  exhbs.engine({
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home');
});

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about' });
});

app.get('/products', (req, res) => {
  res.render('products', { products, cssFileName: 'products' });
});

app.listen(4444, () => {
  console.log(`Application server is running on port ${4444}`);
});
