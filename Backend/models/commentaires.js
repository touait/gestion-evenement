const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idC: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idC"
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "date"
    },
    message: {
      type: DataTypes.STRING(400),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "message"
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
    tableName: "commentaires",
    comment: "",
    indexes: [{
      name: "idE",
      unique: false,
      type: "BTREE",
      fields: ["idE"]
    }]
  };
  const CommentairesModel = sequelize.define("commentaires_model", attributes, options);
  return CommentairesModel;
};