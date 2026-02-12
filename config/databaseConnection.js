require('dotenv').config(); 

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE, 
  process.env.DATABASE_USERNAME, 
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DATABASE_DIALECT, 
   
  }
);

module.exports = sequelize;
