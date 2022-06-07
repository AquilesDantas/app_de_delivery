const express = require('express');
const cors = require('cors');
const LoginRoute = require('./routes/LoginRoute');
const RegisterRoute = require('./routes/RegisterRoute');
const ProductsRoute = require('./routes/ProductsRoute');

const { midErr } = require('./middleware/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static('public'));

app.use(LoginRoute);
app.use(RegisterRoute);
app.use(ProductsRoute);

app.use(midErr);

module.exports = app;
