module.exports = function(sequelize, DataTypes) {
  var Question = sequelize.define('Question', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    typeId: DataTypes.INTEGER,
    questionContent: DataTypes.TEXT,
    questionKey: DataTypes.STRING,
    questionPoint: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      findQuestionContents: function(question_array) {
        return Question.findAll({
          where: {
            id:{$in:question_array}
          }
        });
      }
    }
  });
  return Question;
};
