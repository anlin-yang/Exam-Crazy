var utils = require('utility');

module.exports = function(sequelize, DataTypes) {
  var TeacherInfo = sequelize.define('TeacherInfo', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    teacherId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('F', 'M'),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false,
    classMethods: {
      authentication: function(teacherId, password) {
        return TeacherInfo.find({
          where: {
            teacherId: teacherId,
            password: utils.md5(password)
          }
        });
      }
    }
  });
  return TeacherInfo;
};
