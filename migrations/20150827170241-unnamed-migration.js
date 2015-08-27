'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('Options', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      questionId: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      optionContent: Sequelize.STRING
    })
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('Options')
  }
};
