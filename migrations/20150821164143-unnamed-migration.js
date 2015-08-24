'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Papers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      paperName: Sequelize.STRING,
      questionArray: Sequelize.TEXT,
      subject: Sequelize.STRING,
      score: Sequelize.INTEGER
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Papers');
  }
};
