'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Students', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sex: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false
      },
      class: Sequelize.INTEGER,
      password: {
        type: Sequelize.STRING,
      }
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Students');
  }
};
