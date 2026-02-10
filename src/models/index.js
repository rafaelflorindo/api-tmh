const Sequelize = require('sequelize');
const sequelize = require('../config/database');

const Produto = require('./Produto')(sequelize, Sequelize.DataTypes);
const Categoria = require('./Categoria')(sequelize, Sequelize.DataTypes);

// Relacionamento
Categoria.hasMany(Produto);
Produto.belongsTo(Categoria);

module.exports = {
  sequelize,
  Produto,
  Categoria
};
