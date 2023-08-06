const Sequelize = require('sequelize');
const sequelize = new Sequelize('mydatabase', 'myuser', 'g18Pif18', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
});

module.exports = sequelize;
