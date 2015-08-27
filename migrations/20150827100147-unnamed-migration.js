'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.addColumn(
        'Students',
        'studentId', {
          type: Sequelize.INTEGER,
          allowNull: false
        }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.removeColumn('Students', 'studentId');
  }
};
