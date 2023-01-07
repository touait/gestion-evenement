const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idT: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idT"
    },
    idE: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idE",
      references: {
        key: "idE",
        model: "evenements_model"
      }
    },
    numero: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "numero"
    },
    prix: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "prix"
    },
    promotion: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "promotion"
    },
    createdAt: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.STRING(12),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "tickets",
    comment: "",
    indexes: [{
      name: "Fk",
      unique: false,
      type: "BTREE",
      fields: ["idE"]
    }]
  };
  const TicketsModel = sequelize.define("tickets_model", attributes, options);
  return TicketsModel;
};