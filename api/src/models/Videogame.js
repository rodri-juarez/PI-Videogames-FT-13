const { DataTypes } = require("sequelize");

// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("videogame", {
   /*  id: {
      type: DataTypes.INTEGER primaryKey,
      allowNull: false,
    }, */

    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },

    plataform: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    released: {
      type: DataTypes.DATE,
      allowNull: false,
    },

    rating: {
      type: DataTypes.NUMERIC,
    },
  });

  sequelize.define("genres", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });
};
