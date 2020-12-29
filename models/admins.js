'use strict';
const {
  Model
} = require('sequelize');
const { v4 } = require('uuid');
module.exports = (sequelize, DataTypes) => {
  class admins extends Model {

    static associate(models) {

    }
  };
  admins.init({
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: v4
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'admins',
    timestamps: false
  });
  return admins;
};