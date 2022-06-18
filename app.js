const express = require('express');
const exhbs = require('express-handlebars');
const products = require('./products.json');
const app = express();

const PORT = process.env.PORT || 4444;

app.use(express.static('public'));
app.engine(
  'hbs',
  exhbs.engine({
    extname: 'hbs',
  }),
);
app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', { pageTitle: 'Главная страница' });
});

app.get('/about', (req, res) => {
  res.render('about', { cssFileName: 'about', pageTitle: 'О нас' });
});

app.get('/products', (req, res) => {
  res.render('products', {
    products,
    cssFileName: 'products',
    pageTitle: 'Наши товары',
  });
});

app.get('/product/:productId', (req, res) => {
  const product = products.find(p => p.id === req.params.productId);

  res.render('product', { product, productPageTitle: product.name });
});

app.listen(PORT, () => {
  console.log(`Application server is running on port ${PORT}`);
});
