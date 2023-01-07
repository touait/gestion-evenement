const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    id: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "id"
    },
    idOrders: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idOrders",
      references: {
        key: "idO",
        model: "orders_model"
      }
    },
    idEvents: {
      type: DataTypes.INTEGER(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "idEvents",
      references: {
        key: "idE",
        model: "evenements_model"
      }
    },
    quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "quantity"
    }
  };
  const options = {
    tableName: "ordersdetails",
    comment: "",
    indexes: [{
      name: "ordersdetails_ibfk_1",
      unique: false,
      type: "BTREE",
      fields: ["idEvents"]
    }, {
      name: "idOrders",
      unique: false,
      type: "BTREE",
      fields: ["idOrders"]
    }]
  };
  const OrdersdetailsModel = sequelize.define("ordersdetails_model", attributes, options);
  return OrdersdetailsModel;
};