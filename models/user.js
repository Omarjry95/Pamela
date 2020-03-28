'use strict';

module.exports = (sequelize, DataTypes) => {

  const User = sequelize.define('User', {

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profilePicture: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastSignIn: {
      type: DataTypes.DATE,
      allowNull: true,
    }

  }, {

  });

  User.associate = function(models) {

  };

  return User;
};