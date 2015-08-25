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
    timestamps: false,
    classMethods: {
      findTypes: function(type_array) {
        return Types.findAll({
          where: {
            type_id: {
              $in: type_array
            }
          }
        });
      }
    }
  });
  return Type;
};
