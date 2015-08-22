'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('classes', {
      class_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      class_name:Sequelize.STRING,
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('classes');
  }
};
