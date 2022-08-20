const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('recipe', {
        id: {
            type: DataTypes.UUID,
            defaulValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        summary: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        healthScore: {
            type: DataTypes.FLOAT,
        },
        image: {
            type: DataTypes.STRING,
            defaultValue: 'https://www.sinrumbofijo.com/wp-content/uploads/2016/05/default-placeholder.png',
        },
        steps: {
            type: DataTypes.ARRAY(DataTypes.JSON),
        },

    }, {
        timestamp: false,
    });
};