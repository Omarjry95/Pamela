'use strict';
const bcrypt = require('bcrypt');

const saltRounds = 10;
const password = 'test';

module.exports = {
  up: async (queryInterface, Sequelize) => {

    const hashed = await bcrypt.hash(password, saltRounds);

    return queryInterface.bulkInsert('Users', [
      {
        username: 'Omarjarray95',
        password: hashed,
        createdAt: new Date(),
        updatedAt: new Date()
      }],{

    });
  },

  down: (queryInterface, Sequelize) => {

    return queryInterface.bulkDelete('Users', null, {

    });
  }
};
