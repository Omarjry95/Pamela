'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    const media = [{name: 'Spotify', color: '1ED760'},
      {name: 'Facebook', color: '4267B2'},
      {name: 'Twitter', color: '00AEEF'},
      {name: 'Instagram', color: 'CC235C'},
      {name: 'Tumblr', color: '000000'},
      {name: 'Youtube', color: 'DE2C28'},
      {name: 'Soundcloud', color: 'F93E00'}];

    const records = [];

    media.map(medium => records.push({
      name: medium.name,
      color: medium.color,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert('Externals', records);
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('Externals', null);
  }
};
