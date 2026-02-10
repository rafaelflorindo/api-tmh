const express = require('express');
const cors = require('cors');

const produtoRoutes = require('./routes/produto.routes');
const categoriaRoutes = require('./routes/categoria.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use(produtoRoutes);
app.use(categoriaRoutes);

module.exports = app;
