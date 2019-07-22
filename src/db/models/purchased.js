'use strict';
module.exports = (sequelize, DataTypes) => {
  var Purchased = sequelize.define('Purchased', {
    itemId: DataTypes.INTEGER
  }, {});
  Purchased.associate = function(models) {
    // associations can be defined here
    Purchased.belongsTo(models.Item, {
      foreignKey: "itemId",
      onDelete: "CASCADE"
    });
  };
  return Purchased;
};