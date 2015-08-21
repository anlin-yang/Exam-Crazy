module.exports = function(sequelize, DataTypes) {
  return sequelize.define('questions', {
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
    timestamps: false
  });
};
