import express from "express";
import "dotenv/config"
import {sequelize} from "./conectDb/conect.js"
import { log } from "console";


const app=express();


sequelize.sync().then(
    console.log()
    
).catch(
console.log()

)