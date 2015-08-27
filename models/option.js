module.exports = function(sequelize, DataTypes) {
  var Option = sequelize.define('Option', {
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
  }, {
    classMethods: {
      associate: function(models) {
        Option.hasOne(models.Question, {
          foreignKey: {
            name: 'questionId'
          }
        });
      }
    }
  })
  return Option;
}