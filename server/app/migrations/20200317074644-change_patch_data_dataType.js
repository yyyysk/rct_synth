'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
		return queryInterface.changeColumn('patches', 'data', { dataType: Sequelize.STRING(2048) }); 
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
