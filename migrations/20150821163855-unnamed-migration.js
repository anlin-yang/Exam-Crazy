'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Classes', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      className: Sequelize.STRING,
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Classes');
  }
};
