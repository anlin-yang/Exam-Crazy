module.exports = function(sequelize, DataTypes) {
  var Paper = sequelize.define('Paper', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paperName: DataTypes.STRING,
    subject: DataTypes.STRING,
    questionArray: DataTypes.TEXT,
    score: DataTypes.INTEGER
  }, {
    timestamps: false,
    classMethods: {
      findQuestionArray: function(paper_name) {
        return Papers.find({
          where: {
            paper_name: paper_name
          }
        });
      }
    }
  });
  return Paper;
};
