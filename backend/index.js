const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const app=express()
app.use(cors())
app.use(express.json())
require("dotenv").config()
const {connection}=require("./db")
const {userroute}=require("./routes/roter")
app.use("/user",userroute)

const {authmodel}=require("./middlewares/auth")
const {noderouter}=require("./routes/noderoute")

app.use(authmodel)
app.use("/member",noderouter)












app.listen(process.env.port,async()=>{
    try {
        await connection
        console.log("connect to DB")
    } catch (error) {
        console.log(error)
    }
    console.log("server is running....")
})