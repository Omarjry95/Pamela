'use strict';

module.exports = (sequelize, DataTypes) => {

    const Artist_Link = sequelize.define('Artists_Link',
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
            linkId:
                {
                    type: DataTypes.INTEGER,
                    allowNull: true,
                    references: {
                        model: 'Externals',
                        key: 'id'
                    },
                    onUpdate: 'restrict',
                    onDelete: 'restrict'
                },
            name:
                {
                    type: DataTypes.STRING,
                    allowNull: true,
                },
            url:
                {
                    type: DataTypes.STRING,
                    allowNull: true,
                }
        },
        {

        });

    Artist_Link.associate = function(models)
    {
        Artist_Link.artist = Artist_Link.hasOne(models.Artist, { foreignKey: 'artistId', as: 'artist' });
        Artist_Link.link = Artist_Link.hasOne(models.External, { foreignKey: 'linkId', as: 'link' });
    };

    return Artist_Link;
};