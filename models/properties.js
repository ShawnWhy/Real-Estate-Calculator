const User = import ("./user");
module.exports = function(sequelize, DataTypes){
      var Properties = sequelize.define("Properties", {
            streetAddress:{
                  type: DataTypes.STRING,
            },
            county:{
                  type: DataTypes.STRING,
                  unique:true
            },
            stateTax:{
                  type: DataTypes.FLOAT
                  
            },
            
                  
            
            
      });
      Perperties.belongsTo(User,{
            foreignKey:"username"})
      return Properties
}






// User.hasMany(Post, {foreignKey: 'user_id'})
// Post.belongsTo(User, {foreignKey: 'user_id'})

// Post.find({ where: { ...}, include: [User]})





