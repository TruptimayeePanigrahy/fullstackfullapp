const mongoose=require("mongoose")
const userschema=mongoose.Schema({
    email:String,
    password:String,
    username:String,
    location:String,
    age:Number
},{
    versionKey:false
})

const usermodel=mongoose.model("app",userschema)

module.exports={usermodel}