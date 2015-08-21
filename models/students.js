module.exports = function(sequelize, DataTypes) {
  return sequelize.define('students', {
    student_id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    name:{
      type:Sequelize.STRING,
      allowNull: false,
    },
    gender:{
      type:Sequelize.ENUM('男', '女'),
      allowNull: false
    },
    class:Sequelize.INTEGER,
    password:{
      type:Sequelize.STRING,
    }
  }, {
    timestamps: false
  });
};
