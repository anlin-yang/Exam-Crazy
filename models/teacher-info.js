module.exports = function(sequelize, DataTypes) {
  return sequelize.define('teacher_info', {
    teacher_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('男', '女'),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    freezeTableName: true
  });
};
