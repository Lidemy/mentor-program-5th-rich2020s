'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rich_w17_article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      rich_w17_article.belongsTo(models.rich_w17_user, {foreignKey: 'richUserId' , as: 'userId'})
    }
  };
  rich_w17_article.init({
    title:{
      type:DataTypes.STRING,
      validate: {
        notEmpty: true, 
      }
    },
    content: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true, 
      }
    },
    richUserId: DataTypes.INTEGER,
    isDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
  }, {
    sequelize,
    modelName: 'rich_w17_article',
  });
  return rich_w17_article;
};