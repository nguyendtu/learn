'use strict';
module.exports = function(sequelize, DataTypes) {
  var Posts = sequelize.define('Posts', {
    title: DataTypes.STRING,
    categories: DataTypes.INTEGER,
    content: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Posts;
};
