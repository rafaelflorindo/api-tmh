const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  'mobile_api',
  'root',
  '',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;
