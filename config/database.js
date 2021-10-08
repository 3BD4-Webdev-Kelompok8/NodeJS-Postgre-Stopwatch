const { Sequelize } = require('sequelize');

const db = new Sequelize(
    `postgresql://admin:admin@localhost:8888/stopwatch`,
    { define: { freezeTableName: true },
      logging: false }
  )
module.exports = db;