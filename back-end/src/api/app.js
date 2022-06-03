const express = require('express');
const cors = require('cors');
const LoginRoute = require('./routes/LoginRoute');
const RegisterRoute = require('./routes/RegisterRoute');
const { midErr } = require('./middleware/error');

const app = express();

app.use(cors());
app.use(express.json());
app.use(LoginRoute);
app.use(RegisterRoute);
app.use(midErr);

module.exports = app;
