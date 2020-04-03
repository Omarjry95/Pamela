'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable('Artists_Genres', {
          id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
          },
          artist: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Artists',
              key: 'id'
            },
            onUpdate: 'restrict',
            onDelete: 'restrict'
          },
          genre: {
            type: Sequelize.INTEGER,
            references: {
              model: 'Genres',
              key: 'id'
            },
            onUpdate: 'restrict',
            onDelete: 'restrict'
          },
          createdAt: {
            type: Sequelize.DATE
          },
          updatedAt: {
            type: Sequelize.DATE
          },
        }
    );
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.dropTable('Artists_Genres');
  }
};
