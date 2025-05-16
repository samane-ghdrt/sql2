import {DataTypes} from "sequelize";
import {sequelize} from "../conectDb/conect.js";
import Post from "./Post.js";

const User =sequelize.define("user",{
    name:{
        type:DataTypes.STRING(50),
        allowNull:false
    },
    email:{
      type:DataTypes.STRING(50),
      validate:{
        isEmail:true
      }
    }
}) 
User.hasMany(Post,{foreignKey:{name: 'postId',allowNull:true}});
Post.belongsTo(User);


export default User;