 'use strict';


module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('answered_papers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      student_id: Sequelize.INTEGER,
      answers_array: Sequelize.TEXT
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('answered_papers');
  }
};
