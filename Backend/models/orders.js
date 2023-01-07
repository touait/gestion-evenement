const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idO: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idO"
    },
    idUser: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idUser",
      references: {
        key: "idU",
        model: "users_model"
      }
    }
  };
  const options = {
    tableName: "orders",
    comment: "",
    indexes: [{
      name: "orders_ibfk_1",
      unique: false,
      type: "BTREE",
      fields: ["idUser"]
    }]
  };
  const OrdersModel = sequelize.define("orders_model", attributes, options);
  return OrdersModel;
};