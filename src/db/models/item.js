'use strict';
module.exports = (sequelize, DataTypes) => {
  var Item = sequelize.define('Item', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    listId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    purchased: {
      allowNull: true,
      type: DataTypes.BOOLEAN
    }
  }, {});
  Item.associate = function(models) {
    // associations can be defined here
    Item.belongsTo(models.List, {
      foreignKey: "listId",
      onDelete: "CASCADE"
    });
  };
  return Item;
};