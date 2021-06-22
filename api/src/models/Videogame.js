const { DataTypes } = require("sequelize");
const { Sequelize } = require("sequelize");  
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo  
  sequelize.define("videogame", {     
     id: {
      type: DataTypes.UUID,   
      primaryKey: true,    
    }, 


    name: {
      type: DataTypes.STRING,  
      allowNull: false,
    },

    description: {    
      type: DataTypes.TEXT,
      allowNull: false,  
    },  
  
    plataforms: {
      type: DataTypes.ARRAY((Sequelize.TEXT)),
      allowNull: false,  
    },
    
    relesead: {
      type: DataTypes.DATEONLY,  
      allowNull: false,   
    },  

    rating: {
      type: DataTypes.NUMERIC,    
    }, 

    image: {
      type: DataTypes.TEXT,
       
    },  

    creator: {
      type: DataTypes.TEXT,  
    },
  });  

  sequelize.define("genres", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.TEXT, 
      allowNull: false,
    },  
  });  
};
          