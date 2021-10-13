const { Sequelize } = require('sequelize');

const db = new Sequelize(
  `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DATABASE_PORT}/${process.env.DB_DATABASE}`,
    { define: { freezeTableName: true },
      logging: false }
  )
module.exports = db;