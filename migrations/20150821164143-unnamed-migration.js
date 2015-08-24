'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('papers', {
      papers_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      paper_name:Sequelize.STRING,
      question_array:Sequelize.TEXT,
      subject: Sequelize.STRING,
      score: Sequelize.INTEGER
    });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('papers');
  }
};
