'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    return queryInterface.createTable('Artists_Links', {
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
          link: {
            type: Sequelize.INTEGER,
            allowNull: true,
            references: {
              model: 'Externals',
              key: 'id'
            },
            onUpdate: 'restrict',
            onDelete: 'restrict'
          },
          name: {
            type: Sequelize.STRING,
            allowNull: true
          },
          url: {
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
    );
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.dropTable('Artists_Links');
  }
};
