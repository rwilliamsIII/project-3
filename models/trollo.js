module.exports = function (sequelize, DataTypes) {
	var Trollo = sequelize.define('Trollo', {
		title: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		dueDate: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		description: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		completed: { type: DataTypes.BOOLEAN, allowNull: false },
		pending: { type: DataTypes.BOOLEAN, allowNull: false },
	});
	return Trollo;
};
