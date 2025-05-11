import {DataTypes} from "sequelize";
import {sequelize} from "../conectDb/conect.js";
import { title } from "process";
import User from "./User.js";

const Post=sequelize.define("post",{
    title:{
        type:DataTypes.STRING(50),
        allowNull:true
    },
    content:{
        type:DataTypes.STRING(200),
        allowNull:false
    }
});



export default Post;