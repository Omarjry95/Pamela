'use strict';

module.exports = (sequelize, DataTypes) => {

    const Artist_Genre = sequelize.define('Artists_Genre',
        {
            artistId:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Artists',
                        key: 'id'
                    },
                    onUpdate: 'restrict',
                    onDelete: 'restrict'
                },
            genreId:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Genres',
                        key: 'id'
                    },
                    onUpdate: 'restrict',
                    onDelete: 'restrict'
                },
        },
        {

        });

    Artist_Genre.associate = function(models)
    {
        Artist_Genre.artist = Artist_Genre.hasOne(models.Artist, { foreignKey: 'artistId', as: 'artist' });
        Artist_Genre.genre = Artist_Genre.hasOne(models.Genre, { foreignKey: 'genreId', as: 'genre' });
    };

    return Artist_Genre;
};