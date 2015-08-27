'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.removeColumn('Papers', 'questionArray');
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.addColumn(
      'Papers',
      'questionArray', {
        type: Sequelize.TEXT,

      });
  }
}
