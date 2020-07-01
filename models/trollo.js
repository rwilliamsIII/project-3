module.exports = function (sequelize, DataTypes) {
    var Trollo = sequelize.define("Trollo", {

        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        user: {
            type: DataTypes.STRING,
            allowNull: false
        }

    })
    return Trollo
}