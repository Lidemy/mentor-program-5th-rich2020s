'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class richw17_hw2_lottery extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      richw17_hw2_lottery.belongsTo(models.richw17_hw2_user,  { foreignKey: 'userId' })
    }
  };
  richw17_hw2_lottery.init({
    prizeName: {
     type: DataTypes.STRING,
     validate: {
        notEmpty: true, 
      }
   },
    desc: DataTypes.TEXT,
    probability: {
      type: DataTypes.FLOAT,
      validate: {
        notEmpty: true, 
      }
    },
    isDelete: {
      type: DataTypes.BOOLEAN,
      defaultValue: 0
    }
    userId: DataTypes.INTEGER,
    pictureUrl: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'richw17_hw2_lottery',
  });
  return richw17_hw2_lottery;
};