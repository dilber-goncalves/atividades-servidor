const express = require('express');
const rotas = require('./roteador-jogadores');

const app = express();

app.use(rotas);

app.listen(8000);