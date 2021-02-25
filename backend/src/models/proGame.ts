const db = require('../config/database');

const {DataTypes} = require('sequelize');

const proGame = db.define('proGame', {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true
    },
    userID: {
        type: DataTypes.STRING,
        allowNull: false
    },
    GameName: {
        type: DataTypes.STRING,
        allowNull: false,
        // references: { model: 'games', key: 'name' }
    },
    RatePerSession: {
        type: DataTypes.DOUBLE,
        allowNull: false
    },
    HoursPlayed: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    Rating: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    SampleGameplayLink: {
        type: DataTypes.STRING,
        allowNull: false
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default proGame;