 module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Score', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    paperId: DataTypes.INTEGER,
    score: DataTypes.FLOAT,
  });
};
