module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    student_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    name:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    gender:{
      type:DataTypes.ENUM('男', '女'),
      allowNull: false
    },
    class:DataTypes.INTEGER,
    password:{
      type:DataTypes.STRING,
    }
  }, {
    timestamps: false
  });
};
