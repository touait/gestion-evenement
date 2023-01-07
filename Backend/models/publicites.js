const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idP: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idP"
    },
    category: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "category"
    },
    title: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "title"
    },
    description: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
    },
    file: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "file"
    },
  
    
  };
  const options = {
    tableName: "publicites",
    comment: "",
    indexes: [{
      name: "idB",
      unique: false,
      type: "BTREE",
      fields: ["idB"]
    }]
  };
  const PublicitesModel = sequelize.define("publicites_model", attributes, options);
  return PublicitesModel;
};