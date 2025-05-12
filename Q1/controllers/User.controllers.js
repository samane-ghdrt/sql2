import { error } from "console";
import User from "../model/User.js";

export const getUser=async(req,res)=>{
try {
    const users=await User.findAll();
    res.status(200).send(users);
} catch (error) {
   console.log(error);
   res.status(500).JSON({error:"server error!!!"});
}
};

export const getUserId=async (req,res)=>{
    try {
        const {id}=req.param;
        const user=await User.findByPk(Number(id));

        if(user===null){
            return res.status(404).JSON({error:"not find"})
        }

        res.status(200).send(user);
    } catch (error) {
       console.log(error);
       res.status(500).JSON({error:"server error!!!"});
    }
};


export const creatUser=async(req,res)=>{
    try {
    const user= await User.create(req.body)
    res.status(201).send(user);
        
    } catch (error) {
        console.log(error);
        res.status(500).JSON({error:"server error!!!"});
    }
};


export const updaetUser =async(req,res)=>{
    try {
        const {id}=req.param;
        const uersnew= await User.findByPk(Number(id));

        
        if(user===null){
            return res.status(404).JSON({error:"not find"})
        }

        await uersnew.update(req.body);
    res.status(200).send(uersnew);

    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!"})
    }
};

export const deleteUserSingle =async(req,res)=>{
    try {
        const {id}=req.param;
        const uersdelet= await User.findByPk(Number(id));

        
        if(user===null){
            return res.status(404).JSON({error:"not find"})
        }

        await uersdelet.destroy();
        res.status(200).json({ message: "Post deleted successfully" });


        
    } catch (error) {
        console.log(error);
        res.status(500).json({error:"server error!"})
    }
}