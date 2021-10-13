const Sequelize = require('sequelize');
const db = require('../config/database');

const Stopwatch = db.define("stopwatch", {
    id_stopwatch: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nama: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: "Unnamed Task"
    },
    status: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    timestamp: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
    },
    last_timestamp: {
        type: Sequelize.INTEGER,
        allowNull : false,
        defaultValue : 0
    }
}, { 
    tableName : 'stopwatch',
    schema: 'public',
    freezeTableName: true
});

module.exports = Stopwatch;