module.exports = function(sequelize, DataTypes) {
  var Questions = sequelize.define('questions', {
    question_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    type_id: DataTypes.INTEGER,
    question_content: DataTypes.TEXT,
    question_key: DataTypes.STRING,
    question_point: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      findQuestionContents: function(question_array) {
        return Questions.findAll({
          where: {
            question_id:{$in:question_array}
          }
        });
      }
    }
  });
  return Questions;
};
