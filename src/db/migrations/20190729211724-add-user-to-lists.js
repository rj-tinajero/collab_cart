'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
   return queryInterface.addColumn(
    "Lists",
    "userId",
    {
      type: Sequelize.INTEGER,
      onDelete: "CASCADE",
      allowNull: true,
      references: {
        model: "Users",
        key: "id",
        as: "userId"
      },
    }
  );
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
   return queryInterface.removeColumn("Lists", "userId");
  }
};
