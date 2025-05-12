import express from "express";
import "dotenv/config"
import {sequelize} from "./conectDb/conect.js"
import { error, log } from "console";
import routPost from "./rote/post.rote.js"
import routUser from "./rote/user.rote.js"

const app=express();
 
app.use(express.json());
app.use('/posts',routPost);
app.use('/users',routUser);


sequelize.sync({alter:true})
.then(()=>{console.log("successfully ✅✅✅")})
.catch((error)=>{console.log("error sync ❌❌❌",error)})