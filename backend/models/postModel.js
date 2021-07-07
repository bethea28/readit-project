'use strict';
module.exports = function(sequelize, DataTypes) {
  var Post = sequelize.define('Post', {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
        // Task.belongsTo(models.User, {
        //   onDelete: "CASCADE",
        //   foreignKey: {
        //   allowNull: false
        //   }
      }
    }
  });
  return Post;
};