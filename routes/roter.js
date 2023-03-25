const express=require("express")
const mongoose=require("mongoose")
const {usermodel}=require("../models/model")
const userroute=express.Router()

const jwt=require("jsonwebtoken")
const bcrypt=require("bcrypt")


userroute.post("/register",async(req,res)=>{
    const {email,password,location,username,age}=req.body

    try {
       
        bcrypt.hash(password, 5,async (err, hash)=>{
            
            const user=new usermodel({email,password:hash,location,username,age})
            await user.save()
            res.status(200).send({msg:"User registration successfull!!"})
        });
    } catch (error) {
        res.status(401).send({"msg":"Registration failed!!"})
    }
    
    
    })
    
    userroute.post("/login",async(req,res)=>{
        let {email,password}=req.body
           
        try {
            let data=await usermodel.find({email})
            console.log(data)
            if(data.length>0){
                bcrypt.compare(password, data[0].password, (err, result)=> {
                    if(result){
                        res.status(200).send({"msg":`login sucessfull`,"token":jwt.sign({"userid":data[0]._id }, 'bruce',{expiresIn:"1hr"})})
    
    
                    }else{
                        res.status(400).send({"msg":"user not found",err})
    
                    }
                });
                
    
            }
            
    
            
        } catch (error) {
            res.status(400).send({"msg":error})
            
        }
    })






    module.exports={
        userroute
    }
