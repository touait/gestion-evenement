const {
  DataTypes
} = require('sequelize');
module.exports = sequelize => {
  const attributes = {
    idB: {
      type: DataTypes.INTEGER(30),
      //allowNull: false,
      defaultValue: null,
      primaryKey: true,
      autoIncrement: true,
      comment: null,
      field: "idB"
    },
    category: {
      type: DataTypes.STRING(50),
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
    article: {
      type: DataTypes.STRING(500),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "article"
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
    file: {
      type: DataTypes.STRING(100),
      allowNull: false,
      defaultValue: null,
      primaryKey: false,
      autoIncrement: false,
      comment: null,
      field: "file"
    }
   
   
  };
  const options = {
    tableName: "blogs",
    comment: "",
    indexes: [{
      name: "idU",
      unique: false,
      type: "BTREE",
      fields: ["idU"]
    }]
  };
  const BlogsModel = sequelize.define("blogs_model", attributes, options);
  return BlogsModel;
};