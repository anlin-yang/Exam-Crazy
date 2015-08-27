module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Class', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    className: DataTypes.STRING,
  });
};
