'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('teacher_info', {
      teacher_id: {
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
        type: Sequelize.ENUM('男', '女'),
        allowNull: false
      },
      password: {
        type: Sequelize.STRING,
      }
    });

  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('teacher_info');
  }
};
