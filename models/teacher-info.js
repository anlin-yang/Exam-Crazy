module.exports = function(sequelize, DataTypes) {
  var TeacherInfo = sequelize.define('TeacherInfo', {
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
      authentication: function(id, password) {
        return TeacherInfo.findAll({
          where: {
            id: id,
            password: password
          }
        });
      }
    }
  });
  return TeacherInfo;
};
