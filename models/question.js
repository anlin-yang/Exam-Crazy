module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Question', {
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
    timestamps: false
  });
};
