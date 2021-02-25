const { DataTypes } = require('sequelize');

async function up(queryInterface) {
	await queryInterface.createTable('users', {
		id: {
			type: DataTypes.STRING,
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
		// proGamesID: {
		// 	type: DataTypes.UUID,
		// 	allowNull: false
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
	await queryInterface.createTable('games', {
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: 'uniqueTag',
		},
	});
	await queryInterface.createTable('proGames', {
		id: {
			type: DataTypes.UUID,
			allowNull: false,
			primaryKey: true
		},
		userID: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		GameName: {
			type: DataTypes.STRING,
			allowNull: false,
			// references: { model: 'games', key: 'name' }
		},
		RatePerSession: {
			type: DataTypes.FLOAT,
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
	
}

async function down(queryInterface) {
	await queryInterface.dropTable('users');
}

module.exports = { up, down };