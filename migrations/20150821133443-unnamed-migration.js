'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Scores', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      studentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      paperId: Sequelize.INTEGER,
      score: Sequelize.FLOAT,
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Scores');
  }
};
