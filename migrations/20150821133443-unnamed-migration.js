'use strict';


module.exports = {
  up: function(queryInterface, Sequelize) {

    return queryInterface.createTable('scores', {
      score_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      student_id:{
        type:Sequelize.INTEGER,
        allowNull: false,

      },
      paper_id: Sequelize.INTEGER,
      score:Sequelize.FLOAT,
    });
  },

  down: function(queryInterface, Sequelize) {

    return queryInterface.dropTable('scores');
  }
};
