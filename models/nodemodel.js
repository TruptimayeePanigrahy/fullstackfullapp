const mongoose=require("mongoose")
const nodeschema=mongoose.Schema({
    title:String,
    desc:String,
    heading:String,
    userid:String
},{
    versionKey:false
})

const nodemodel=mongoose.model("appmodel",nodeschema)

module.exports={nodemodel}