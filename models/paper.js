module.exports = function(sequelize, DataTypes) {
  var Paper =  sequelize.define('Paper', {
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
    classMethods: {
      findQuestionArrayBypaperName: function(paperName) {
        return Paper.find({
          where: {
            paperName: paperName
          }
        });
      },

    }
  });
  return Paper;
};
