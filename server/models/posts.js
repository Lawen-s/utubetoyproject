"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // models.posts.hasMany(models.post_comments);
      // models.posts.hasMany(models.post_likes);
      // models.posts.hasOne(models.video);
      models.posts.hasMany(models.post_comments);
      models.posts.hasMany(models.post_likes);

      models.posts.belongsTo(models.users);
    }
  }
  //1:n 1이 n에 대해 hasmany
  //n:1 n이 1에 대해 belongsTo
  posts.init(
    {
      title: DataTypes.STRING,
      image: DataTypes.STRING,
      total_likes: { type: DataTypes.INTEGER, defaultValue: 0 },
      views: { type: DataTypes.INTEGER, defaultValue: 0 },
      video: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "posts",
    }
  );
  return posts;
};
