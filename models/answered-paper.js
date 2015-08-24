module.exports = function(sequelize, DataTypes) {
  return sequelize.define('AnsweredPaper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    studentId: DataTypes.INTEGER,
    answersArray: DataTypes.TEXT
  }, {
    timestamps: false
  });
};
