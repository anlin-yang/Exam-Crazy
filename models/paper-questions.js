module.exports = function (sequelize, DataTypes) {
  var PaperQuestion = sequelize.define('PaperQuestion', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    paperId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    questionId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    classMethods: {
      associate: function (models) {
        PaperQuestion.belongsTo(models.Paper, {
          foreignKey: {
            name: 'id'
          }
        });
        PaperQuestion.hasMany(models.Question, {
          foreignKey: {
            name: 'id'
          }
        })
      }
    }
  });
  return PaperQuestion;
};
