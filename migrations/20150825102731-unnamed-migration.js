'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('StudentPapers', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      },
    StudentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    PaperId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    },
    AnsweredPaperId:{
      type: Sequelize.INTEGER,
      allowNull: false,
    }
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('StudentPapers');
  }
};
