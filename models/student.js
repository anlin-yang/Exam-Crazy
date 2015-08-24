module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Student', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    gender: {
      type: DataTypes.ENUM('M', 'F'),
      allowNull: false
    },
    class: DataTypes.INTEGER,
    password: {
      type: DataTypes.STRING,
    }
  }, {
    timestamps: false
  });
};
