module.exports = function(sequelize, DataTypes) {
  return sequelize.define('TeacherInfo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    sex: {
      type: DataTypes.ENUM('F', 'M'),
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
