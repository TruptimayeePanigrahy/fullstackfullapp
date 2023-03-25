const express=require("express")
const noderouter=express.Router()
const {nodemodel}=require("../models/nodemodel")
const jwt=require("jsonwebtoken")


noderouter.get("/",async(req,res)=>{
    const token=req.headers.authorization
    const decoded=jwt.verify(token,"bruce")
try {
    if(decoded){
        let user=await nodemodel.find({"userid":decoded.userid})
    
        res.status(200).send(user)
    }
    
} catch (error) {
    res.status(400).send("failed")
}

})
noderouter.post("/add",async(req,res)=>{

    
    try {
        const user=new nodemodel(req.body)
    await user.save()
    res.status(200).send("Add user successfull!!")
    } catch (error) {
        console.log(error)
    }
})
noderouter.patch("/update/:nodeid",async(req,res)=>{
    let {nodeid}=req.params
    let newdata=req.body
   try {
       await nodemodel.findByIdAndUpdate({_id:nodeid},newdata)
       res.status(200).send({"msg":"user updated successfully"})
   } catch (error) {
       console.log(error)
   }
    
})
noderouter.delete("/delete/:nodeid",async(req,res)=>{
    let {nodeid}=req.params
    
   try {
       await nodemodel.findByIdAndDelete({_id:nodeid})
       res.status(200).send({"msg":"user deleted successfully"})
   } catch (error) {
       console.log(error)
   }
})



module.exports={noderouter}