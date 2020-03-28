'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    const categories = ['Alternative', 'Anime', 'Asian', 'Blues', 'Children', 'Classical', 'Comedy', 'Commercial',
        'Country', 'Dance', 'Easy Listening', 'Electronic', 'Folk', 'Hip Hop', 'Holiday', 'Industrial',
        'Christian', 'Gospel', 'Jazz', 'Latin', 'New Age', 'Opera', 'Pop', 'Punk', 'R&B', 'Soul', 'Reggae',
        'Rock', 'Soundtrack', 'Spoken Word', 'Tex-Mex/Tejano', 'Vocal', 'World'];

    const records = [];

    categories.map(category => records.push({
      name: category,
      createdAt: new Date(),
      updatedAt: new Date()
    }));

    return queryInterface.bulkInsert('Categories', records);
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('Categories', null, {

    });
  }
};
