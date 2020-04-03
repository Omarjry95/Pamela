'use strict';

module.exports = (sequelize, DataTypes) => {

    const Artist = sequelize.define('Artist',
        {
            userId:
                {
                    type: DataTypes.INTEGER,
                    allowNull: false,
                    references: {
                        model: 'Users',
                        key: 'id'
                    },
                    onUpdate: 'restrict',
                    onDelete: 'restrict'
                },
            name:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            profilePicture:
                {
                    type: DataTypes.STRING,
                    allowNull: true,
                }
        },
        {

        });

    Artist.associate = function(models)
    {
        Artist.user = Artist.hasOne(models.User, { foreignKey: 'userId', as: 'user' });
    };

    return Artist;
};