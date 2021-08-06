'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class richw17_hw2_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      richw17_hw2_user.hasMany(models.richw17_hw2_lottery,  { foreignKey: 'id' })
    }
  };
  richw17_hw2_user.init({
    username: {
      type: DataTypes.STRING,
      unique: true,
      validate: {
        notEmpty: true, 
      }
    },
    password: {
     type: DataTypes.STRING,
     validate: {
        notEmpty: true,
      }
    }
  }, {
    sequelize,
    modelName: 'richw17_hw2_user',
  });
  return richw17_hw2_user;
};