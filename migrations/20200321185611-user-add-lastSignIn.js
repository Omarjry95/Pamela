'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('Users', 'lastSignIn', {
      type: Sequelize.DATE,
      allowNull: true,
    },{
          after: 'password' /* after option is only supported by MySQL */
        });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'lastSignIn');
  }
};
