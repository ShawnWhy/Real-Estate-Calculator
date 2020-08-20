
module.exports = function(sequelize, DataTypes){
      var States = sequelize.define("States", {
            stateName:{
                  type: DataTypes.STRING,
                  unique:true
            },
            stateTax:{
                  type: DataTypes.FLOAT
            }
      });
      return states

}





