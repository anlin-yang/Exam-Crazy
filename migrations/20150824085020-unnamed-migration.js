'use _strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('TeacherInfos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: false
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      gender: {
        type: Sequelize.ENUM('M', 'F'),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
      }
    });
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('TeacherInfos');
  }
};
