module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Option', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    optionContent: DataTypes.STRING
  });
}