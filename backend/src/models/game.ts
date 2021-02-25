const db = require('../config/database');

const {DataTypes} = require('sequelize');

const game = db.define('game', {
    id: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: 'uniqueTag',
    },
});

export default game;