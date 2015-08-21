module.exports = function(sequelize, DataTypes) {
  return sequelize.define('class', {
    class_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    class_name:DataTypes.STRING,
  }, {
    timestamps: false
  });
};
