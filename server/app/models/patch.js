'use strict';
module.exports = (sequelize, DataTypes) => {
  const patch = sequelize.define('patch', {
	id: {
	  type: DataTypes.INTEGER,
	  autoIncrement: true,
	  primaryKey: true
	},
    name: DataTypes.STRING,
    author: DataTypes.STRING,
    data: DataTypes.STRING(2048)
  }, {
    underscored: true,
  });
  patch.associate = function(models) {
    // associations can be defined here
  };
  return patch;
};
