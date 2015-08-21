'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('answers', {
      answer_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      question_id: Sequelize.INTEGER,
      answer_context: Sequelize.TEXT
    });
  },

  down: function(queryInterface, Sequelize) {

  }
};
