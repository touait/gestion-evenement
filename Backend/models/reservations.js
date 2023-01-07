const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idRes: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idRes"
    },
    idU: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idU",
      references: {
        key: "idU",
        model: "users_model"
      }
    },
    idT: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idT",
      references: {
        key: "idT",
        model: "tickets_model"
      }
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
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "createdAt"
    },
    updatedAt: {
      type: DataTypes.STRING(30),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "updatedAt"
    }
  };
  const options = {
    tableName: "reservations",
    comment: "",
    indexes: [{
      name: "reservations_ibfk_1",
      unique: false,
      type: "BTREE",
      fields: ["idU"]
    }, {
      name: "reservations_ibfk_2",
      unique: false,
      type: "BTREE",
      fields: ["idT"]
    }, {
      name: "reservations_ibfk_3",
      unique: false,
      type: "BTREE",
      fields: ["idE"]
    }]
  };
  const ReservationsModel = sequelize.define("reservations_model", attributes, options);
  return ReservationsModel;
};