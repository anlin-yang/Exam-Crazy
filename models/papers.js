module.exports = function(sequelize, DataTypes) {
  return sequelize.define('papers', {
    papers_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    paper_name:DataTypes.STRING,
    subject: DataTypes.STRING,
    question_array:DataTypes.TEXT,
    score:DataTypes.INTEGER
  }, {
    timestamps: false
  });
};
