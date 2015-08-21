'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('students', {
      student_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: false
      },
      name:{
        type:Sequelize.STRING,
        allowNull: false,
      },
      gender:{
        type:Sequelize.ENUM('男', '女'),
        allowNull: false
      },
      class:Sequelize.INTEGER,
      password:{
        type:Sequelize.STRING,
      }
    });
  },

  down: function (queryInterface, Sequelize) {
      return queryInterface.dropTable('students');
  }
};
