module.exports = function (sequelize, DataTypes) {
  return sequelize.define('PaperQuestions', {
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
        PaperQuestions.belongsTo(models.Paper, {
          foreignKey: {
            name: 'id'
          }
        });
        PaperQuestions.hasMany(models.Question, {
          foreignKey: {
            name: 'id'
          }
        })
      }
    }
  });
};