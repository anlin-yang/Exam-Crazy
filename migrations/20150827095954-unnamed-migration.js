'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
        'Students',
        'id', {
          type: Sequelize.INTEGER,
          autoIncrement: true
        }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
        'Students',
        'id', {
          type: Sequelize.INTEGER
        }
    );
  }
};
