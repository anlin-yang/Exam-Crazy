module.exports = function(sequelize, DataTypes) {
  return sequelize.define('answered_papers', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    student_id: DataTypes.INTEGER,
    answers_array: DataTypes.TEXT
  }, {
    timestamps: false
  });
};
