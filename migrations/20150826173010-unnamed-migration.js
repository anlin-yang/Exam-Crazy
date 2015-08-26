'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'TeacherInfos',
      'id', {
        type: Sequelize.INTEGER,
        autoIncrement: true
      }
    );
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.changeColumn(
      'TeacherInfos',
      'id', {
        type: Sequelize.INTEGER
      }
    );
  }
};
