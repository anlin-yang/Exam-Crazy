'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Questions', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      typeId: Sequelize.INTEGER,
      questionContent: Sequelize.TEXT,
      questionKey: Sequelize.STRING,
      questionPoint: Sequelize.INTEGER
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Questions');
  }
};
