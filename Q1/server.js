import express from "express";
import "dotenv/config"
import {sequelize} from "./conectDb/conect.js"
import { error, log } from "console";


const app=express();


sequelize.sync({alter:true})
.then(()=>{console.log("successfully ✅✅✅");})
.catch((error)=>{console.log("error sync ❌❌❌",error)})