const db = require('../config/database');

const {DataTypes} = require('sequelize');

const user = db.define('user', {
    id: {
        type: DataTypes.CHAR,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isPro: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
    },
    // ProGamesID: {
    //     type: DataTypes.UUID,
    //     allowNull: false
    // },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false
    }
});

export default user;