module.exports = function(sequelize, DataTypes) {
 return sequelize.define('answers', {
    answer_id: {
     primaryKey: true,
     type: DataTypes.INTEGER,
     autoIncrement: true
   },
   types:{
     type: DataTypes.STRING,
     allowNull: false,
   },
   question_id:{
     type: DataTypes.INTEGER,
     allowNull: false,
   },
   answer_context:{
     type: DataTypes.TEXT,
     allowNull: false,
   }
 }, {
   timestamps: false
 });
};
