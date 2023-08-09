const Sequelize = require('sequelize');

const sequelize = new Sequelize('node-completed', 'root', 'Ashish8298', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
