const express = require('express');
const cors = require('cors');
const LoginRoute = require('./routes/LoginRoute');
const { midErr } = require('./middleware/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(LoginRoute);
app.use(midErr);

module.exports = app;
