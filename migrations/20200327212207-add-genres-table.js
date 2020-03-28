'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable(
        'Genres',
        {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          category: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Categories',
              key: 'id'
            },
            onUpdate: 'restrict',
            onDelete: 'restrict'
          },
          name: {
            type: Sequelize.STRING,
            allowNull: false
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
        }
    )
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.dropTable('Genres');
  }
};
