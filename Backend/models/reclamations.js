const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idRec: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idRec",
      references: {
        key: "idU",
        model: "users_model"
      }
    },
    Subject: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Subject"
    },
    msgenvoyer: {
      type: DataTypes.STRING(400),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "msgenvoyer"
    },
    msgreception: {
      type: DataTypes.STRING(400),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "msgreception"
    },
    daterec: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "daterec"
    },
    Category: {
      type: DataTypes.STRING(150),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "Category"
    }
  };
  const options = {
    tableName: "reclamations",
    comment: "",
    indexes: []
  };
  const Rec = sequelize.define("Rec", attributes, options);
  return Rec;
};