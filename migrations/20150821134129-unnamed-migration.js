'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Types', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      type: Sequelize.STRING
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Types');
  }
};
