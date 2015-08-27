module.exports = function(sequelize, DataTypes) {
  var Type = sequelize.define('Type', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    type: DataTypes.STRING
  }, {
    classMethods: {
      findTypes: function(type_array) {
        return Type.findAll({
          where: {
            id: {
              $in: type_array
            }
          }
        });
      }
    }
  });
  return Type;
};
