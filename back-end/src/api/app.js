const express = require('express');
const cors = require('cors');
const LoginRoute = require('./routes/LoginRoute');

const app = express();

app.use(cors());
app.use(express.json());
app.use(LoginRoute);

module.exports = app;
