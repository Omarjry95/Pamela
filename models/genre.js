'use strict';

module.exports = (sequelize, DataTypes) => {

    const Genre = sequelize.define('Genre',
        {
            categoryId:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Categories',
                        key: 'id'
                    },
                    onUpdate: 'restrict',
                    onDelete: 'restrict'
                },
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
        Genre.category = Genre.hasOne(models.Category, { foreignKey: 'categoryId', as: 'category' });
    };

    return Genre;
};