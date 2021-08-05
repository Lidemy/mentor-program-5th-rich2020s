'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rich_w17_user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rich_w17_user.hasMany(models.rich_w17_article, {foreignKey: 'id',as: 'userId'})
    }
  };
  rich_w17_user.init({
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
    modelName: 'rich_w17_user',
  });
  return rich_w17_user;
};