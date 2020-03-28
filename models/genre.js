'use strict';

module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre',
        {
            name:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
        },
        {

        });

    Genre.associate = function(models)
    {
        Genre.category = Genre.hasOne(models.Category, { foreignKey: 'category', as: 'category' });
    };

    return Genre;
};