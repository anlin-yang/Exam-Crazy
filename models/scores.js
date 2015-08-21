module.exports = function(sequelize, DataTypes) {
  return sequelize.define('scores', {
    score_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    student_id:{
      type:DataTypes.INTEGER,
      allowNull: false,

    },
    paper_id: DataTypes.INTEGER,
    score:DataTypes.FLOAT,
  }, {
    timestamps: false
  });
};
