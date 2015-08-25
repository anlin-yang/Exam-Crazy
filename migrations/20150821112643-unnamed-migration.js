 'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('AnsweredPapers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      studentId: Sequelize.INTEGER,
      answersArray: Sequelize.TEXT
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('AnsweredPapers');
  }
};
