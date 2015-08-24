'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Answers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      type: Sequelize.STRING,
      questionId: Sequelize.INTEGER,
      answerContext: Sequelize.TEXT
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Answers');
  }
};
