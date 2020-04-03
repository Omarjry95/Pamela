'use strict';

module.exports = (sequelize, DataTypes) => {

    const External = sequelize.define('External',
        {
            name:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                },
            color:
                {
                    type: DataTypes.STRING,
                    allowNull: false,
                }
        },
        {

        });

    External.associate = function(models) {

    };

    return External;
};