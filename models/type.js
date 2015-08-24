module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING
  }, {
    timestamps: false
  });
};
