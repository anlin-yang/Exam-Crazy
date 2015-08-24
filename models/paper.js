module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Paper', {
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
    timestamps: false
  });
};
