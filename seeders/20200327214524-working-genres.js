'use strict';

module.exports = {
  up: (queryInterface, Sequelize) =>
  {
    const categories = [
      { id: 1, genres: ['Acoustic Blues', 'African Blues', 'Blues Rock', 'British Blues', 'Classic Blues',
          'Contemporary Blues', 'Country Blues', 'Electric Blues', 'Folk Blues', 'Gospel Blues', 'Jazz Blues',
          'Modern Blues', 'Piano Blues', 'Punk Blues', 'Rhythm Blues', 'Soul Blues', 'Urban Blues', 'Zydeco'] },
      { id: 2, genres: ['Lullabies', 'Sing-Along'] },
      { id: 3, genres: ['Avant-Garde', 'Ballet', 'Baroque', 'Cantata', 'Chamber Music', 'Chant', 'Choral',
          'Classical Crossover', 'Concerto', 'Contemporary Classical', 'Mass Requiem', 'Medieval', 'Minimalism',
          'Modern Classical', 'Oratorio', 'Orchestral', 'Organum', 'Renaissance', 'Sonata', 'Symphony',
          'Wedding Music'] },
      { id: 4, genres: ['Novelty', 'Parody'] },
      { id: 5, genres: ['Alternative Country', 'Americana', 'Bluegrass', 'Christian Country', 'Classic Country',
          'Contemporary Bluegrass', 'Contemporary Country', 'Western', 'Franco-Country', 'Hellbilly',
          'Instrumental Country', 'Outlaw Country', 'Psychobilly', 'Punkabilly', 'Sertanejo',
          'Traditional Bluegrass', 'Traditional Country', 'Western Swing'] },
      { id: 6, genres: ['Breakcore', '4-Beat', 'Acid Breaks', 'Big Beat', 'Broken Beat', 'Chillstep',
          'Deep House', 'Dubstep', 'Electro House', 'Electroswing', 'Future Garage', 'Glitch Pop',
          'Grime', 'Doomcore', 'Eurodance', 'Bubblegum', 'New Beat', 'Horrorcore', 'Acid House', 'Funky House', 'Ghetto House', 'Hip House',
          'Minimal House', 'Progressive House', 'Rave', 'Swing House', 'Tech House', 'Tribal House', 'US Garage',
          'Jungle', 'Drum n Bass', 'Acid Techno', 'Ghettotech', 'Minimal', 'Acid Trance', 'Classic Trance',
          'Dream Trance', 'Goa Trance', 'Hard Trance', 'Tech Trance', 'Uplifting Trance', 'Trap', 'Drumstep',
          'Ragga Jungle', 'Raggacore', 'EDM', 'IDM', 'Alternative Dance', 'Baggy', 'Madchester', 'Dance-Punk',
          'Dance-Rock', 'Boogie', 'Dream House', 'Space House'] },
      { id: 7, genres: ['Background', 'Bop', 'Lounge', 'Swing'] },
      { id: 8, genres: ['2-Step', '8-Bit', 'Chiptune', 'Ambient House', 'Ambient Techno', 'Drone', 'Bassline',
          'Chillwave', 'Nintendocore', 'Video Games Music', 'Crunk', 'Balearic Beat', 'Chill Out',
          'Dub', 'Moombahton', 'Nu Jazz', 'Trip Hop', 'Computer Music', 'Tape Music', 'Folktronica', 'Glitch',
          'Synthcore', 'Electronica', 'Electroclash', 'Ethereal Wave', 'Indietronica', 'Electropunk',
          'Industrial', 'UK Garage'] },
      { id: 9, genres: ['Anti-Folk', 'Contemporary Folk', 'Freak Folk', 'Indie Folk', 'Psychedelic Folk',
          'Sung Poetry', 'Alternative Folk', 'Traditional Folk', 'Celtic Folk'] },
      { id: 10, genres: ['Country Rap', 'Bounce', 'Christian Hip Hop', 'Conscious Hip Hop', 'Latin Rap',
          'Freestyle', 'Gangsta Rap', 'Hip Hop', 'Industrial Hip Hop', 'Jazz Rap', 'Rap', 'Underground Rap',
          'Pop Rap'] },
      { id: 11, genres: ['Death Industrial', 'EBM', 'Witch House'] },
      { id: 12, genres: ['CCM', 'Classic Christian', 'Praise & Worship'] },
      { id: 13, genres: ['Country Gospel', 'Contemporary Gospel', 'Gospel'] },
      { id: 14, genres: ['Acid Jazz', 'Avant-Garde Jazz', 'Bebop', 'Contemporary Jazz', 'Crossover Jazz',
          'Fusion', 'Gypsy Jazz', 'Latin Jazz'] },
      { id: 15, genres: ['Tango', 'Bachata', 'Bolero', 'Bossa Nova', 'MPB', 'Samba', 'Contemporary Latin',
          'Cumbia', 'Flamenco', 'Mariachi', 'Fado', 'Reggaeton', 'Regional Mexicano', 'Salsa', 'Soca', 'Tejano'] },
      { id: 16, genres: ['Healing', 'Meditation', 'Nature', 'Relaxation'] },
      { id: 17, genres: ['Opera'] },
      { id: 18, genres: ['Country Pop', 'Electropop', 'Synthpop', 'Indie Pop', 'Futurepop', 'Christian Pop',
          'Adult Contemporary', 'Arab Pop', 'Baroque Pop', 'Britpop', 'Bubblegum Pop', 'Chamber Pop', 'Europop',
          'Balkan Pop', 'Latin Pop', 'Dance Pop', 'Dream Pop', 'Jangle Pop', 'Ballad', 'Orchestral Pop',
          'Power Pop', 'Psychedelic Pop', 'Surf Pop', 'Teen Pop', 'Traditional Pop', 'Turkish Pop', 'Wonky Pop'] },
      { id: 19, genres: ['Contemporary R&B', 'Doo Wop', 'Funk'] },
      { id: 20, genres: ['Country Soul', 'Modern Soul', 'Neo-Soul', 'Psychedelic Soul', 'Quiet Storm', 'Soul'] },
      { id: 21, genres: ['Dancehall', 'Roots Reggae', 'Reggae Fusion', 'Ragga', 'Ska', 'Rocksteady'] },
      { id: 22, genres: ['Alternative Rock', 'College Rock', 'Emo', 'Experimental Rock', 'Goth Rock', 'Grunge',
          'Hard Rock', 'Indie Rock', 'New Wave', 'Progressive Rock', 'Shoegaze', 'Country Rock', 'Electronic Rock',
          'Space Rock', 'Industrial Metal', 'Industrial Rock', 'Christian Metal', 'Christian Rock', 'Pop-Rock',
          'Soft Rock', 'Acid Rock', 'Adult Alternative', 'Art Rock', 'Death Metal', 'Black Metal', 'Doom Metal',
          'Glam Rock', 'Gothic Metal', 'Grindcore', 'Math Metal', 'Math Rock', 'Metal', 'Metalcore',
          'Noise Rock', 'Post-Punk', 'Progressive Rock', 'Progressive Metal', 'Psychedelic Rock', 'Rock & Roll',
          'Rockabilly', 'Roots Rock', 'Southern Rock', 'Stoner Metal', 'Surf Rock', 'Thrash Metal', 'Folk Rock'] },
      { id: 23, genres: ['Foreign Cinema', 'Musicals', 'Original Score', 'Soundtrack'] },
      { id: 24, genres: ['Spoken Word'] },
      { id: 25, genres: ['Chicano', 'Classic Tejano', 'Tex-Mex'] },
      { id: 26, genres: ['A cappella', 'Gregorian Chant'] },
      { id: 27, genres: ['Afro-Beat', 'Coupé-Décalé', 'Kizomba', 'Kuduro', 'Rai', 'Khaliji', 'Cajun', 'Carribean',
          'Mambo', 'Celtic', 'Polka', 'Worldbeat'] },
      { id: 28, genres: ['Art Punk', 'Britpunk', 'Crust Punk', 'Folk Punk', 'Hardcore Punk', 'Steampunk',
          'Sythpunk', 'Pop Punk', 'Afro Punk'] },
      { id: 29, genres: ['Lo-Fi', 'Musique Concrète']},
      { id: 30, genres: ['Anime']},
      { id: 31, genres: ['Jingles', 'TV Themes']},
      { id: 32, genres: ['Christmas']},
      { id: 33, genres: ['J-Pop', 'K-Pop']}
    ];

    const records = [];

    for (let i = 0; i < categories.length; i++)
    {
        let category = categories[i];

        category.genres.map(genre => records.push({
            category: category.id,
            name: genre,
            createdAt: new Date(),
            updatedAt: new Date()
        }))
    }

    return queryInterface.bulkInsert('Genres', records);
  },

  down: (queryInterface, Sequelize) =>
  {
    return queryInterface.bulkDelete('Genres', null, {

    });
  }
};
