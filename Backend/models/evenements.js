const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idE: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idE"
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "name"
    },
    lieu: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "lieu"
    },
    date: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    description: {
      type: DataTypes.STRING(200),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "description"
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
    image: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "image"
    },
    prix: {
      type: DataTypes.INTEGER(30),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "prix"
    },
    nbrT: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "nbrT"
    },
    idU: {
      type: DataTypes.INTEGER(12),
      allowNull: true,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idU",
      references: {
        key: "idU",
        model: "users_model"
      }
    }

  };
  const options = {
    tableName: "evenements",
    comment: "",
    indexes: [{
      name: "idU",
      unique: false,
      type: "BTREE",
      fields: ["idU"]
    }]
  };
  const EvenementsModel = sequelize.define("evenements_model", attributes, options);
  return EvenementsModel;
};

// DATEONLY