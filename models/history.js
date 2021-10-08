const Sequelize = require('sequelize');
const db = require('../config/database');

const History = db.define("history", {
    id_history: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed Task"
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
    }
});

module.exports = History;