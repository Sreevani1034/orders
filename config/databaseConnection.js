const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USERNAME,
  process.env.DATABASE_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DATABASE_DIALECT,
    port: process.env.DB_PORT || 5432,
    dialectOptions: process.env.DATABASE_DIALECT === 'postgres' ? {
      ssl: { require: true, rejectUnauthorized: false }
    } : {}
  }
);

module.exports = sequelize;
