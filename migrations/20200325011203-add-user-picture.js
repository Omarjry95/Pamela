'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.addColumn('Users', 'profilePicture', {
      type: Sequelize.STRING,
      allowNull: true,
    },{
      after: 'password' /* after option is only supported by MySQL */
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('Users', 'profilePicture');
  }
};
