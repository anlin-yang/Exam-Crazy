module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Answer', {
    id: {
      primaryKey: true,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    answerContext: {
      type: DataTypes.TEXT,
      allowNull: false,
    }
  });
};
